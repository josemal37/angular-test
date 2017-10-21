import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'jmal-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  post: Post;
  users: User[];
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.postService.getPost(params['id']).subscribe((data) => {
        this.post = data;
        this.userService.getUsers().subscribe((userParams) => {
          this.users = userParams;
        });
      });
    });
  }

  onSubmit(): void {
    this.postService.putPost(this.post).subscribe((data) => {
      console.log('data', data);
    });
  }

}
