// person.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  loadPeople,
  loadPeopleFailure,
  loadPeopleSuccess,
} from './rxjs.actions';
import { RxjsServiceService } from '../rxjs-services/rxjs-service.service';

@Injectable()
export class PersonEffects {
  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeople),
      mergeMap(() =>
        this.dataService.getRXJSData().pipe(
          map((people) => loadPeopleSuccess({ people })),
          catchError((error) => of(loadPeopleFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private dataService: RxjsServiceService
  ) {}
}
