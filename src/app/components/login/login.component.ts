import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'jmal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {};
  invalidUser: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.userService.validateUser(this.user)) {
      this.router.navigate(['stories']);
    } else {
      this.invalidUser = true;
    }
  }

}
