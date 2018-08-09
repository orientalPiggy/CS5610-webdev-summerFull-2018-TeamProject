import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {routing} from './app.rounting';
import {CampingSiteGridComponent} from './camping-site-grid/camping-site-grid.component';

import { CampingSiteDetailComponent } from './camping-site-detail/camping-site-detail.component';

// third part imports
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { SearchBarCampingSiteComponent } from './search-bar-campground/search-bar-camping-site.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CampingSiteServiceClient} from './services/campingSite.service.client';
import {CampingSiteToDetailServiceClient} from './communication-services/camping-site-to-detail.service.client';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { EventWaterfallComponent } from './event-waterfall/event-waterfall.component';
import { EventCardComponent } from './event-card/event-card.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {UserServiceClient} from './services/user.service.client';
import {MapServiceClient} from './services/map.service.client';
import {NgxMasonryModule} from 'ngx-masonry';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { OrganizationSignUpComponent } from './organization-sign-up/organization-sign-up.component';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import {ProviderServiceClient} from './services/provider.service.client';
import {LoginToNavbarServiceClient} from './communication-services/login-to-navbar.service.client';
import { AdminComponent } from './admin/admin.component';
import { UserListComponent } from './user-list/user-list.component';
import { AccordionModule } from 'ngx-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CampingSiteGridComponent,
    SearchBarCampingSiteComponent,
    CampingSiteDetailComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    BasicInformationComponent,
    EventWaterfallComponent,
    EventCardComponent,
    RegisterComponent,
    LoginComponent,
    OrganizationSignUpComponent,
    AdminComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    CarouselModule.forRoot(),  // ngx-bootstrap
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    NgxMasonryModule,
  ],
  providers: [
    CampingSiteServiceClient,
    CampingSiteToDetailServiceClient,
    UserServiceClient,
    MapServiceClient,
    ProviderServiceClient,
    LoginToNavbarServiceClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
