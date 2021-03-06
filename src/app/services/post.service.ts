import * as querystring from 'querystring';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Post } from '../model/post';

const API_URL = 'http://localhost:3000';
const POSTS = '/posts';
const PHOTOS = '/photos';
const EXPAND_USERS = '_expand=user';
const SORT_BY_ID = 'sort=id';
const DEFAULT_PICTURE = {
  'pictureURL': 'http://placehold.it/600/92c952',
  'pictureThumbnailURL': 'http://placehold.it/150/92c952',
  'altPicture': 'Default picture'
};

@Injectable()
export class PostService {

  constructor(private httpClient: HttpClient) { }

  deletePost(id: number): Observable<any> {
    return this.httpClient.delete(`${API_URL}${POSTS}/${id}`);
  }

  getDefaultPhoto() {
    return DEFAULT_PICTURE;
  }

  getPhoto(id: number): Observable<any> {
    return this.httpClient.get(`${API_URL}${PHOTOS}/${id}`);
  }

  getPhotos(): Observable<any> {
    return this.httpClient.get(`${API_URL}${PHOTOS}?${SORT_BY_ID}`);
  }

  getPost(id: number): Observable<Post> {
    return this.httpClient.get(`${API_URL}${POSTS}/${id}?${EXPAND_USERS}`);
  }

  getPosts(withUserData?: boolean): Observable<any> {
    let queryString: string = `${API_URL}${POSTS}`;
    if (withUserData) {
      queryString += `?${EXPAND_USERS}`;
    }
    return this.httpClient.get(queryString);
  }

  postPost(post: Post): Observable<any> {
    return this.httpClient.post(`${API_URL}${POSTS}`, post);
  }

  putPost(post: Post): Observable<any> {
    return this.httpClient.put(`${API_URL}${POSTS}/${post.id}`, post);
  }

}
