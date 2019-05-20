import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DevToolsExtension, NgReduxModule} from '@angular-redux/store';
import {HttpClientModule} from '@angular/common/http';

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
  constructor(private devTools: DevToolsExtension) {
  }


  private getDevToolsEnhancer() {
    return this.devTools.isEnabled() ?
      [this.devTools.enhancer()] :
      [];
  }

}
