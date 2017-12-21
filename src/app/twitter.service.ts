import { Injectable, EventEmitter } from '@angular/core';
import {Http , Response, RequestOptions, URLSearchParams} from "@angular/http";
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { TwitterUser } from "./twitter-user-list/twitter-user";
import { Twitt } from "./twitter-user-list/twitt";

@Injectable()
export class TwitterService {

  constructor(private http: Http) { 
       
  }
  a:string;
  currentTwitts: Subject<Twitt[]> = new Subject<Twitt[]>();
  currentUser:TwitterUser;
  getTweetsOfUser(id:string,max_id?:string){
    let params = new URLSearchParams();
    params.set('id',id);
    if (max_id){
      params.set('max_id',max_id);
    }
    this.http.get('/api/users/search/tweets',{params:params.toString()})
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error')).subscribe((jsonData) => {
        this.currentTwitts.next(jsonData)});
  }
  getUsers(searchString: string) : Observable<TwitterUser[]>{
    let params = new URLSearchParams();
    params.set('query',searchString);
    return this.http.get('/api/users',{params: params.toString()})
    .map((res:Response) => res.json())
    .catch((error:any) => Observable
    .throw(error.json().error || 'Server error'));
  }
  onNotification(): Observable<Twitt[]> {
    return this.currentTwitts.asObservable();
  }
}
