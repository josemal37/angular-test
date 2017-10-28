import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

const TITLE_EDIT = 'Editing';
const TITLE_NEW = 'New post';

@Component({
  selector: 'jmal-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  isInEdition: boolean = true;
  post: Post;
  title: string;
  users: User[];
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService,
    private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.loadEditForm(params['id']);
      } else {
        this.loadNewForm();
      }
    });
  }

  onSubmit(): void {
    if (this.isInEdition) {
      this.submitEditForm();
    } else {
      this.submitNewForm();
    }
  }

  private loadEditForm(id: number): void {
    this.postService.getPost(id).subscribe((data) => {
      this.post = data;
      this.title = `${TITLE_EDIT} ${this.post.title}`;
      this.userService.getUsers().subscribe((userParams) => {
        this.users = userParams;
      });
      this.postService.getPhoto(this.post.id).subscribe((photoParams) => {
        this.post['pictureURL'] = photoParams['url'];
        this.post['pictureThumbnailURL'] = photoParams['thumbnailUrl'];
        this.post['altPicture'] = photoParams['title'];
      });
    });
  }

  private loadNewForm(): void {
    this.isInEdition = false;
    this.post = {};
    this.title = TITLE_NEW;
    this.userService.getUsers().subscribe((userParams) => {
      this.users = userParams;
    });
    let defaultPicture = this.postService.getDefaultPhoto();
    this.post['pictureURL'] = defaultPicture['pictureURL'];
    this.post['pictureThumbnailURL'] = defaultPicture['pictureThumbnailURL'];
    this.post['altPicture'] = defaultPicture['altPicture'];
  }

  private submitEditForm(): void {
    this.postService.putPost(this.post).subscribe((data) => {
      this.router.navigate(['stories']);
    });
  }

  private submitNewForm(): void {
    this.postService.postPost(this.post).subscribe((data) => {
      this.router.navigate(['stories']);
    });
  }

}
