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
  }
  loadMore(){
    var maxValueOfY = Math.max(...this.twitts.map(o => o.id));
    this._twitterService.loadMoreTweetsOfUser(maxValueOfY,this.twitts);
  }
  ngOnInit() {
    this.twitts= [];
      this._twitterService.onNotification().subscribe(
      notification => {this.twitts = notification;},
      error => console.log(error)
    );
    
  }

}
