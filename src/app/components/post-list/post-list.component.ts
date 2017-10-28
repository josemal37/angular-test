import { Component, OnInit } from '@angular/core';

import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'jmal-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  editPost(event: Post): void {
    this.router.navigate(['edit', event.id]);
  }

  deletePost(event: Post): void {
    this.postService.deletePost(event.id).subscribe(
      (data) => {
        this.getPosts();
      }
    );
  }

  newPost() {
    this.router.navigate(['new']);
  }

  viewPost(event: Post): void {
    this.router.navigate(['post', event.id]);
  }

  private getPosts(): void {
    this.postService.getPosts(true).subscribe((data) => {
      this.posts = data;
      this.postService.getPhotos().subscribe((photosData) => {
        let j = 0;
        for (let i = 0; i < this.posts.length; i++) {
          for(let j = 0; j < photosData.length; j++) {
            if (this.posts[i].id == photosData[j]['id']) {
              this.posts[i]['pictureURL'] = photosData[j]['url'];
              this.posts[i]['pictureThumbnailURL'] = photosData[j]['thumbnailUrl'];
              this.posts[i]['altPicture'] = photosData[j]['title'];
              break;
            }
          }
        }
      });
    });
  }

}
