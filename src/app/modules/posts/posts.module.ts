import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from '../../components/post-list/post-list.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [PostListComponent]
})
export class PostsModule { }
