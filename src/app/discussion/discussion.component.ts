import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {DiscussionServiceClient} from '../services/discussion.service.client';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private discussionService: DiscussionServiceClient) {
  }

  @Input()
  discussionToChild;

  @Output() messageEvent = new EventEmitter<Object>();

  postPeople = {_id: '', username: 'Canceled Account'};
  receiver = {username: 'Canceled Account'};
  curUser = {_id: '', error: ''};
  content;



  sendMessage(message) {
    this.messageEvent.emit(message);
  }

  ngOnInit() {
    console.log(new Date());
    // console.log(this.discussionToChild.postPeople);
    this.userService.findUserById(this.discussionToChild.postPeople)
      .then(res => {
        if (res) {
          this.postPeople = res;
        }
      });

     if (this.discussionToChild.type === 'reply') {
       if (this.discussionToChild.preDiscussion) {
         this.userService.findUserById(this.discussionToChild.preDiscussion.postPeople)
           .then(res => {
             if (res) {
               this.receiver = res;
             }
           });
       } else {
           this.discussionToChild.preDiscussion = {postPeople: '', content: 'deleted message'};
       }
    }

    this.userService
      .profile()
      .then(user => this.curUser = user);
  }

  reply() {
    if (this.curUser.error) {
      alert(this.curUser.error);
    } else {
      if (!this.content) {
        alert('Content can not be empty!');
        return;
      }
      const newDiscussion = {
        postPeople: this.curUser,
        content: this.content,
        preDiscussion: this.discussionToChild._id,
        postTime: new Date(),
        // event:
        type: 'reply'
      };
      this.discussionService
        .postDiscussion(newDiscussion)
        .then(() => this.finAllDiscussions());
    }
  }

  finAllDiscussions() {
    this.discussionService
      .findAllDiscussions()
      .then(discussions => this.sendMessage(discussions));
  }

  delete() {
    if (this.curUser.error){
      alert(this.curUser.error);
    } else {
      this.discussionService
        .deleteDiscussion(this.discussionToChild._id)
        .then(() => this.finAllDiscussions());
    }
  }

}