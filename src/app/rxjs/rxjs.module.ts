import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { PersonEffects } from './rxjs-state/rxjs.effects';
import { CodeDisplayComponent } from './code-display/code-display.component';

const routes: Routes = [{ path: '', component: RxjsHomeComponent }];

@NgModule({
  declarations: [RxjsHomeComponent, CodeDisplayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([PersonEffects]),
  ],
})
export class RxjsModule {}
