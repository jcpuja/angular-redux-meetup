import {Epic} from 'redux-observable';
import {ENTERPRISE_RANDOM, enterpriseRandomSuccess} from './actions';
import {filter, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EnterpriseRandom} from './model';

@Injectable({
  providedIn: 'root'
})
export class Epics {

  enterpriseRandomEpic: Epic = actions$ => actions$.ofType(ENTERPRISE_RANDOM).pipe(
    filter(action => action.status === 'request'),
    switchMap(() => this.http.get<EnterpriseRandom>('http://localhost:8080/enterprise-random/')),
    map(result => enterpriseRandomSuccess(result))
  )

  constructor(private http: HttpClient) {
  }
}
