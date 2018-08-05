import { MasonryOptions, Masonry as IMasonry, AnimationOptions, ImagesLoadedConstructor, MasonryGridItem } from './ng-masonry-grid.interface';
import { Observable } from 'rxjs/Observable';
export declare class NgMasonryGridService {
    private _platformId;
    el: any;
    masonryOptions: MasonryOptions;
    animationOptions: AnimationOptions;
    items: Array<any>;
    itemsCount: number;
    itemsRenderedCount: number;
    didScroll: boolean;
    resizeTimeout: any;
    useAnimation: boolean;
    isAnimate: boolean;
    _msnry: IMasonry;
    _onScrollHandler: any;
    _onResizeHandler: any;
    useImagesLoaded: boolean;
    imagesLoaded: ImagesLoadedConstructor;
    docElem: HTMLElement;
    /**
     * Default animation options of grid items on scroll
     */
    animationDefaults: AnimationOptions;
    /**
     * Default masonry options
     */
    masonryDefaults: MasonryOptions;
    constructor(_platformId: any);
    getViewportH(): number;
    scrollY(): number;
    getOffset(el: any): {
        top: number;
        left: number;
    };
    inViewport(el: any, h?: number): boolean;
    extend(a: any, b: any): any;
    /**
     * Initialize and extend all options
     * @param el: Masonry Container DOM Element
     * @param masonryOptions: User defined Masonry Options
     * @param useAnimation: User defined Animation (Boolean)
     * @param animationOptions: User defined Animation options
     * @param useImagesLoaded: User defined imagesloaded (Boolean)
     */
    init(el: any, masonryOptions: MasonryOptions, useAnimation?: boolean, animationOptions?: AnimationOptions, useImagesLoaded?: boolean): IMasonry;
    initializeMasonry(_element: any, options: MasonryOptions): IMasonry;
    private _init();
    private _initMasonry();
    private _onScrollFn();
    private _scrollPage();
    private _resizeHandler();
    /**
     * Check if total grid items are redered in the DOM
     */
    private _checkTotalRendered();
    /**
     * On Destroy remove Scroll and Resize event Listeners
     */
    onDestory(): void;
    /**
     * Remove scroll animations
     */
    removeAnimation(): void;
    /**
     * Add Each grid item to Masonry based on Masony addStatus property
     * @param element Element - Grid item
     */
    add(element: any): void;
    /**
     * TODO: reorder masonry items on load
     * @param element
     */
    addOrderItem(element: any): void;
    /**
     * Re order Masonry items to original order
     */
    reorderMasonryItems(): void;
    /**
     * Set add status to Masonry before adding or appending
     * @param value 'append' or 'prepend' or 'add'
     */
    setAddStatus(value: string): void;
    /**
     * Remove grid item from Masonry
     * @param item Element: Removed Grid Item DOM
     */
    removeItem(item: any): Observable<MasonryGridItem>;
    /**
     * Remove first grid item from the Masonry List
     */
    removeFirstItem(): Observable<MasonryGridItem>;
    /**
     * Empty the Masonry list
     */
    removeAllItems(): Observable<MasonryGridItem>;
    /**
     * Add transition effect on DOM Node removal
     * @param elem: Grid item DOM element
     */
    addTransition(elem: any): void;
    /**
     * On transition End, remove eventListener
     * @param observer Subscriber<MasonryGridItem>
     * @param elem: Grid item DOM element
     */
    private _onTransitionEnd(observer, elem);
}