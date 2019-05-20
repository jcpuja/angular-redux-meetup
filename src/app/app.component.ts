import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from './state';
import {decrement, enterpriseRandomRequest, increment} from './actions';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<h1>Redux Test</h1>
  <div>Count: {{count$ | async}}
    <button (click)="decrement()">-</button>
    <button (click)="increment()">+</button>
    <button (click)="enterpriseRandom()">Enterprise Random ©</button> <span *ngIf="fetching$ | async"> Randomizing Enterpriseyly...</span>
  </div>`
})
export class AppComponent {
  private count$: Observable<number>;
  private fetching$: Observable<boolean>;

  constructor(private ngRedux: NgRedux<AppState>, private http: HttpClient) {
    this.count$ = this.ngRedux.select(s => s.count);
    this.fetching$ = this.ngRedux.select(s => s.fetching);
  }

  decrement() {
    this.ngRedux.dispatch(decrement());
  }

  increment() {
    this.ngRedux.dispatch(increment());
  }

  enterpriseRandom() {
    this.ngRedux.dispatch(enterpriseRandomRequest());
  }
}
