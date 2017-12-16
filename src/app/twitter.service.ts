import { Injectable } from '@angular/core';
import {Http , Response, RequestOptions, URLSearchParams} from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { TwitterUser } from "./twitter-user-list/twitter-user";

@Injectable()
export class TwitterService {

  constructor(private http: Http) { 

  }
  
  getUsers(searchString: string) : Observable<TwitterUser[]>{
    let params = new URLSearchParams();
    params.set('query',searchString);
    return this.http.get('/api/users',{params: params.toString()})
    .map((res:Response) => res.json())
    .catch((error:any) => Observable
    .throw(error.json().error || 'Server error'));
  }

}
