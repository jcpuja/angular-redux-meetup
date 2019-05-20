import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {HttpClientModule} from '@angular/common/http';
import {AppState, INITIAL_STATE} from './state';
import {rootReducer} from './reducers';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {Epics} from './epics';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private devTools: DevToolsExtension, private ngRedux: NgRedux<AppState>, private epics: Epics) {
    const epicMiddleware = createEpicMiddleware();

    this.ngRedux.configureStore(rootReducer, INITIAL_STATE, [epicMiddleware], this.getDevToolsEnhancer());

    epicMiddleware.run(epics.enterpriseRandomEpic);
  }


  private getDevToolsEnhancer() {
    return this.devTools.isEnabled() ?
      [this.devTools.enhancer()] :
      [];
  }

}
