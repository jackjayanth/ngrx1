import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialHomeComponent } from './components/material-home/material-home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: MaterialHomeComponent }];

@NgModule({
  declarations: [MaterialHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  exports: [RouterModule],
})
export class MaterialModule {}
