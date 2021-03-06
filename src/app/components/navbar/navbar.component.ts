import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'jmal-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onStoriesClick(): void {
    this.router.navigate(['stories']);
  }

  onLogoutClick(): void {
    this.router.navigate(['']);
  }

}
