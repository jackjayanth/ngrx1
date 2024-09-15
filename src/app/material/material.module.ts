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
import { SampleWorkComponent } from './components/sample-work/sample-work.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [{ path: '', component: MaterialHomeComponent }];

@NgModule({
  declarations: [
    MaterialHomeComponent,
    WorkUxComponent,
    WorkUxComponent1,
    SampleWorkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  exports: [RouterModule],
})
export class MaterialModule {}
