import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  constructor() { }


  getRandomNumber(): Observable<number> {
    console.log('In the service getting a random number')
   return of(Math.floor(Math.random() * 100)).pipe(take(1))
  }
}
