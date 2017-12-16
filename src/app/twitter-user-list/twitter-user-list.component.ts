import { Component, OnInit } from '@angular/core';
import { TwitterUser } from "./twitter-user";
import { TwitterService } from "../twitter.service";
@Component({
  selector: 'app-twitter-user-list',
  templateUrl: './twitter-user-list.component.html',
  styleUrls: ['./twitter-user-list.component.css'],
  providers: [TwitterService]
})
export class TwitterUserListComponent implements OnInit {
  twitterUsers:TwitterUser[];
  getUsers(str: string){
    this._twitterService.getUsers().subscribe((jsonData) => {
        this.twitterUsers = jsonData;
        console.log(jsonData);
      });
  }
  showUserTweets(user: TwitterUser){
    console.log(user);//works
  }
  constructor(private _twitterService: TwitterService) {}

  ngOnInit() {
    this.twitterUsers = [];
  }


}
