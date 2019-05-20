import { Component } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from './state';
import {decrement, increment} from './actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<h1>Redux Test</h1>
  <div>Count: {{count$ | async}}
    <button (click)="decrement()">-</button>
    <button (click)="increment()">+</button>
  </div>`
})
export class AppComponent {
  private count$: Observable<number>;

  constructor(private ngRedux: NgRedux<AppState>) {
    this.count$ = this.ngRedux.select(s => s.count);
  }

  decrement() {
    this.ngRedux.dispatch(decrement());
  }

  increment() {
    this.ngRedux.dispatch(increment());
  }
}
