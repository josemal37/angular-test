import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Post } from "../../model/post";
import { PostService } from "../../services/post.service";

@Component({
  selector: 'jmal-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  post: Post;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.postService.getPost(params['id']).subscribe((data) => {
        this.post = data;
        this.postService.getPhoto(this.post.id).subscribe((photoParams) => {
          this.post['pictureURL'] = photoParams['url'];
          this.post['pictureThumbnailURL'] = photoParams['thumbnailUrl'];
          this.post['altPicture'] = photoParams['title'];
        });
      });
    });
  }

}
