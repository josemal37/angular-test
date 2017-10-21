import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user';

@Component({
  selector: 'jmal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.router.navigate(['stories']);
  }

}
