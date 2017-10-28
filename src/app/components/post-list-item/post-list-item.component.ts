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
  deletePost: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  editPost: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  viewPost: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onClick(post: Post): void {
    this.editPost.emit(post);
  }

  onClickDelete(): void {
    this.deletePost.emit(this.post);
  }

  onClickEdit(): void {
    this.editPost.emit(this.post);
  }

  onClickView(): void {
    this.viewPost.emit(this.post);
  }

}
