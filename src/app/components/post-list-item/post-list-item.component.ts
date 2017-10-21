import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Post } from '../../model/post';

@Component({
  selector: 'jmal-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;
  @Output()
  eventEmmiter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onClick(post: Post): void {
    this.eventEmmiter.emit(post);
  }

}
