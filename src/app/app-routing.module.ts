import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import {HomeComponent} from "./home/home.component";
import {PostComponent} from "./post/post.component";


const routes: Routes = [
  {
    path: 'blog/:id/:name',
    component: BlogComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
