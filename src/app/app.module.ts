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


@NgModule({
  declarations: [
    AppComponent,
    TwitterUserListComponent,
    TwittsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
