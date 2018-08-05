/**
 * Shailendra Kumar <shailu.snist@gmail.com>
 * @ignore
 */
import { ElementRef, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { NgMasonryGridComponent } from './ng-masonry-grid.component';
import { NgMasonryGridService } from './ng-masonry-grid.service';
export declare class NgMasonryGridDirective implements OnDestroy, AfterViewInit, OnInit {
    private _element;
    private _parent;
    private platformId;
    private masonryGridService;
    constructor(_element: ElementRef, _parent: NgMasonryGridComponent, platformId: any, masonryGridService: NgMasonryGridService);
    ngOnInit(): void;
    /**
     * Add Masonry grid item after view initialization
     */
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** When HTML in brick changes dynamically, observe that and change layout */
    private watchForHtmlChanges();
}