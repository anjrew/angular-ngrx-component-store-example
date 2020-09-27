import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable, of } from 'rxjs';
import { catchError, tap, take, switchMap } from 'rxjs/operators';
import { NumbersService } from '../../services/numbers.service';

/* This interface represents the state of the component */
export interface ConstructorInitializedStoreState {
  stringProperty: string;
  numberProperty: number;
  booleanProperty: boolean;
  arrayProperty: Array<any>;
  objectProperty: object;
}

/* The initial state to be passed into the Service constructor */
export const initialConstructorInitializedStoreState = {
  stringProperty: 'Mock string',
  numberProperty: 13412,
  booleanProperty: false,
  arrayProperty: [],
  objectProperty: {}
}

@Injectable({
  providedIn: 'root'
})
export class ConstructorInitializedStoreComponentStoreService extends ComponentStore<ConstructorInitializedStoreState>{

  /* Initializing through the constructor makes the state immediately available to the ComponentStore consumers. */
  constructor(
    private numberService: NumbersService
  ) {
    /* We pass the default state in here in the super constructor */
    super(initialConstructorInitializedStoreState)
  }



  /* YOU can define the selectors in here */
  readonly stringProperty$ = this.select(state => state.stringProperty);
  readonly numberProperty$ = this.select(state => state.numberProperty);
  readonly booleanProperty$ = this.select(state => state.booleanProperty);
  readonly arrayProperty$ = this.select(state => state.arrayProperty);
  readonly objectProperty$ = this.select(state => state.objectProperty);


  /* Using an updater in the service to extract the business logic outside the component */
  readonly updateString = this.updater((state, stringValue: string) => ({
    ...state,
    stringProperty: stringValue,
  }));




  /* Effects playground */
  /* Using an updater with the effect to  */
  readonly updateNumber = this.updater((state, numberValue: number) => ({
    ...state,
    numberProperty: numberValue,
  }));




  // Each new call of getRandomNumber pushed a new number into the number stream
  readonly getRandomNumber = this.effect((request$: Observable<void>) => {
    return request$.pipe(
      // 👇 Handle race condition with the proper choice of the flattening operator.
      switchMap((_) => this.numberService.getRandomNumber()
        .pipe(
          //👇 Act on the result within inner pipe.
          tap({
            next: (number) => this.updateNumber(number),
            error: (e) => console.log(e),
          }),
          // 👇 Handle potential error within inner pipe.
          catchError((e) => { console.log(e); return of() }),
        ))
    );
  })

}
