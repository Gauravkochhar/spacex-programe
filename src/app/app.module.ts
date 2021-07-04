import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

import { InjectionToken } from '@angular/core';
export const LocalStorage = new InjectionToken('localStorage');

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/spacex-programe/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
