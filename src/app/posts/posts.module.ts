import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsHomeComponent } from './components/posts-home/posts-home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: PostsHomeComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule ],
  exports: [RouterModule],
  declarations: [PostsHomeComponent],
})
export class PostsModule {}
