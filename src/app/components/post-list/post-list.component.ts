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
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      this.postService.getPhotos().subscribe((photosData) => {
        for (let i = 0; i < this.posts.length; i++) {
          this.posts[i]['pictureURL'] = photosData[i]['url'];
          this.posts[i]['pictureThumbnailURL'] = photosData[i]['thumbnailUrl'];
          this.posts[i]['altPicture'] = photosData[i]['title'];
        }
      });
    });
  }

  onSelect(event: Post): void {
    console.log('Post', event);
    this.router.navigate(['edit', event.id]);
  }

  onClick() {
    this.router.navigate(['new']);
  }

}
