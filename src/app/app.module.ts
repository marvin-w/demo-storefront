import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StorefrontModule } from '@spartacus/storefront';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StorefrontModule.withConfig({
      server: {
        baseUrl: 'https://localhost:9002',
        occPrefix: '/rest/v2/'
      },
      authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret'
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
