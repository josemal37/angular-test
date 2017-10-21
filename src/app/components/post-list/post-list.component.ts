import { Component, OnInit } from '@angular/core';

import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'jmal-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  constructor(private postService: PostService) { }

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

}
