import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule }    from '@angular/forms';

import { AppRoutingModule }        from './app-routing.module';

import { FooterComponent } from './footer/footer.component';
import { LoginRoutingModule }      from './login/login-routing.module';
import { LoginComponent }          from './login/login.component';
import { PageNotFoundComponent }   from './pageNotFound/not-found.component';
import {DialogService} from "./dialog.service";
import {Router} from "@angular/router";




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoginRoutingModule
  ],
  declarations: [
    AppComponent,
      LoginComponent,
      PageNotFoundComponent,
      FooterComponent
  ],
    providers: [
        DialogService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
