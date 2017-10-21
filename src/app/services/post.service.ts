import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Post } from '../model/post';

const API_URL = 'http://localhost:3000';
const POSTS = '/posts';
const PHOTOS = '/photos';

@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any> {
    return this.httpClient.get(`${API_URL}${POSTS}`);
  }

  getPhotos(): Observable<any> {
    return this.httpClient.get(`${API_URL}${PHOTOS}`);
  }

}
