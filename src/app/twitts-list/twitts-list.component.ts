import { Component, OnInit } from '@angular/core';
import { TwitterService } from "../twitter.service";
import { Twitt } from "../twitter-user-list/twitt";

@Component({
  selector: 'app-twitts-list',
  templateUrl: './twitts-list.component.html',
  styleUrls: ['./twitts-list.component.css'],
  //providers: [TwitterService]
})
export class TwittsListComponent implements OnInit {
  twitts:Twitt[];
  constructor(private _twitterService: TwitterService) { 
    // this._twitterService.currentTwitts.subscribe((jsonData) => {
    //     this.twitts = jsonData;
    //    console.log(jsonData);
    //   });
  }
  ngOnInit() {
    this.twitts= [];
      this._twitterService.onNotification().subscribe(
      notification => { this.twitts = notification;console.log('nnununn');},
      error => console.log(error)
    );
    
  }

}
