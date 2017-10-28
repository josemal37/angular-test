import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { NewComponent } from './components/new/new.component';
import { PostViewComponent } from "./components/post-view/post-view.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'post/:id',
    component: PostViewComponent
  },
  {
    path: 'stories',
    component: PostListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
