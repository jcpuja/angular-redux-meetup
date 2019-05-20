import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {HttpClientModule} from '@angular/common/http';
import {AppState, INITIAL_STATE} from './state';
import {rootReducer} from './reducers';

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
  constructor(private devTools: DevToolsExtension, private ngRedux: NgRedux<AppState>) {
    this.ngRedux.configureStore(rootReducer, INITIAL_STATE, [], this.getDevToolsEnhancer());
  }


  private getDevToolsEnhancer() {
    return this.devTools.isEnabled() ?
      [this.devTools.enhancer()] :
      [];
  }

}
