import { Injectable } from '@angular/core';
import {Http , Response} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { TwitterUser } from "./twitter-user-list/twitter-user";

@Injectable()
export class TwitterService {

  constructor(private http: Http) { 

  }
  
  getUsers() : Observable<TwitterUser[]>{
    return this.http.get('/api/users')
    .map((res:Response) => res.json())
    .catch((error:any) => Observable
    .throw(error.json().error || 'Server error'));
  }

}
