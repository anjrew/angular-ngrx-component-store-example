import { Component, OnInit } from '@angular/core';
import {
  ConstructorInitializedStoreComponentStoreService,
  initialConstructorInitializedStoreState
} from './constructor-initialized-store.component-store.service';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './constructor-initialized-store.component.html',
  styleUrls: ['./constructor-initialized-store.component.scss'],
  viewProviders: [ConstructorInitializedStoreComponentStoreService]
})
export class ConstructorInitializedStoreComponent implements OnInit {


  /* Old select syntax through the store*/
  readonly array$ = this.componentStore.state$.pipe(
    map(state => state.arrayProperty),
  );


  /* New select syntax */
  readonly object$ = this.componentStore.select(
    state => state.objectProperty,
  );


  readonly string$ = this.componentStore.state$.pipe(
    map(state => state.stringProperty),
  );


  readonly number$ = this.componentStore.state$.pipe(
    map(state => state.numberProperty),
  );


  readonly boolean$ = this.componentStore.booleanProperty$;

  constructor(
    private readonly componentStore: ConstructorInitializedStoreComponentStoreService
  ) {
  }


  ngOnInit(): void {
  }


  resetState(): void {
    /* Set the state by passing in an entire object into the setState function */
    this.componentStore.setState(initialConstructorInitializedStoreState)
  }

  updateString(): void {
    /* Use an updater in the service */
    this.componentStore.updateString(Math.random().toString(36).substring(7))
  }


  getRandomNumber(): void {
    console.log('getting a random number')
    /* Use an updater in the service */
    this.componentStore.getRandomNumber()
  }


}
