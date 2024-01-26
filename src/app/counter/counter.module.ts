import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterHomeComponent } from './components/counter-home/counter-home.component';

const routes: Routes = [{ path: '', component: CounterHomeComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [CounterHomeComponent],
})
export class CounterModule {}
