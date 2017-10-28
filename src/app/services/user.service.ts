import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Post } from '../model/post';
import { User } from '../model/user';

const API_URL = 'http://localhost:3000';
const USERS = '/users';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get(`${API_URL}${USERS}`);
  }

  validateUser(user: User): boolean {
    let isValid = false;
    if (user.username === "admin" && user.password === "123asd") {
      isValid = true;
    }
    return isValid;
  }

}
