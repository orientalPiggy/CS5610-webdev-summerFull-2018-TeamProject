import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CampingSiteDetailComponent} from './camping-site-detail/camping-site-detail.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';

import {EventDetailComponent} from './event-detail/event-detail.component';
import {CreateEventComponent} from './create-event/create-event.component';
import {EventEditorComponent} from './event-editor/event-editor.component';

import {OrganizationSignUpComponent} from './organization-sign-up/organization-sign-up.component';
import {AdminComponent} from './admin/admin.component';
import {DiscussionBoardComponent} from './discussion-board/discussion-board.component';
import {CreateSiteComponent} from './create-site/create-site.component';
import {CreateEquipmentComponent} from './create-equipment/create-equipment.component';
import {EquipmentEditorComponent} from './equipment-editor/equipment-editor.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'homepage', component: HomePageComponent},
  { path: 'camping-site/:contractID/:facilityID/detail', component: CampingSiteDetailComponent},
  { path: 'detail', component: CampingSiteDetailComponent},
  { path: 'eventEditor/:eventId', component: EventEditorComponent},
  { path: 'eventDetail/:eventId', component: EventDetailComponent},
  { path: 'equipmentEditor', component: EquipmentEditorComponent},
  { path: 'createEvent', component: CreateEventComponent},
  { path: 'createSite', component: CreateSiteComponent},
  { path: 'createEquipment', component: CreateEquipmentComponent},
  { path: 'organization/signUp', component: OrganizationSignUpComponent},
  { path: 'test', component: DiscussionBoardComponent},
  { path: '**', component: HomeComponent},

];

export const routing = RouterModule.forRoot(appRoutes);
