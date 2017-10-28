import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from '../../components/post-list/post-list.component';

import { MaterialModule } from '../material/material.module';
import { PostListItemComponent } from '../../components/post-list-item/post-list-item.component';
import { EditComponent } from '../../components/edit/edit.component';
import { NewComponent } from '../../components/new/new.component';
import { PostViewComponent } from '../../components/post-view/post-view.component';
import { PostFormComponent } from '../../components/post-form/post-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [PostListComponent, PostListItemComponent, EditComponent, NewComponent, PostViewComponent, PostFormComponent]
})
export class PostsModule { }
