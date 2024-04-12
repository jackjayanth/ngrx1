import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialHomeComponent } from './components/material-home/material-home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { WorkUxComponent } from './components/work-ux/work-ux.component';
import { WorkUxComponent1 } from './components/work-ux1/work-ux1.component';

const routes: Routes = [{ path: '', component: MaterialHomeComponent }];

@NgModule({
  declarations: [MaterialHomeComponent, WorkUxComponent, WorkUxComponent1],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule
  ],
  exports: [RouterModule],
})
export class MaterialModule { }
