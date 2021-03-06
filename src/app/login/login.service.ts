import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Login } from './login';

@Injectable()
export class LoginService {
    username:string;
    constructor(private http: Http){}

    getUsers(): Observable<Login[]>{
         return this.http.get('assets/users/users.json')
            .map((response: Response) => response.json() as Login[])
            .catch(this.handleError)
    }

     private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
