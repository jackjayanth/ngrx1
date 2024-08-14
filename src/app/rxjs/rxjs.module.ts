import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: RxjsHomeComponent }];

@NgModule({
  declarations: [RxjsHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RxjsModule {}
