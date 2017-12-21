import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http,Response,RequestOptions, URLSearchParams} from "@angular/http";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TwitterUserListComponent } from './twitter-user-list/twitter-user-list.component';
import { TwitterService } from "./twitter.service";
import { TwittsListComponent } from './twitts-list/twitts-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
   { path: '', redirectTo: '/Home', pathMatch: 'full' },
   { path: 'Home', component: TwitterUserListComponent },
   { path: 'About', component: AboutComponent },
   { path: 'Contact', component: ContactComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    TwitterUserListComponent,
    TwittsListComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,RouterModule.forRoot(appRoutes)],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
