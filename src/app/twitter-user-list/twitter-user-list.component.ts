import { Component, OnInit } from '@angular/core';
import { TwitterUser } from "./twitter-user";
import { TwitterService } from "../twitter.service";
@Component({
  selector: 'app-twitter-user-list',
  templateUrl: './twitter-user-list.component.html',
  styleUrls: ['./twitter-user-list.component.css'],
})
export class TwitterUserListComponent implements OnInit {
  twitterUsers:TwitterUser[];
  getUsers(str: string){
    this._twitterService.getUsers(str).subscribe((jsonData) => {
        this.twitterUsers = jsonData;
      });
  }
  getTwitts(user : TwitterUser){
     this._twitterService.getTweetsOfUser(user.id.toString());
  }
  showUserTweets(user: TwitterUser){
     this._twitterService.getTweetsOfUser(user.id.toString());
  }
  constructor(private _twitterService: TwitterService) {}

  ngOnInit() {
    this.twitterUsers = [];
  }


}
