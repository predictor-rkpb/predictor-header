import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserDetailsService, UserMgmtModule } from "shared-lib";
import { keycloakConfig } from '../environments/environment';

function initializeKeycloak(service: UserDetailsService) {
  return async () =>  {
    await service.init(keycloakConfig)
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserMgmtModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [UserDetailsService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
