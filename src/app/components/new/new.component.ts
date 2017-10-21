import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../model/post';
import { PostService } from '../../services/post.service';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'jmal-new',
  templateUrl: '../edit/edit.component.html',
  styleUrls: ['../edit/edit.component.css']
})
export class NewComponent implements OnInit {

  post: Post = {};
  users: User[];
  constructor(private postService: PostService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  onSubmit() {
    this.postService.postPost(this.post).subscribe((data) => {
      console.log(data);
      this.router.navigate(['stories']);
    });
  }

}
