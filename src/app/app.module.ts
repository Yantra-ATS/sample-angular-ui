import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartModule} from 'primeng/chart';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NvidiaStockComponent} from './nvidia-stock/nvidia-stock.component';
import {HttpClientModule} from '@angular/common/http';
import { CallbackComponentComponent } from './callback-component/callback-component.component';
import {GoogleLoginProvider, SocialLoginModule} from '@abacritt/angularx-social-login';
import { LoginComponent } from './login/login.component';
import {HighchartsChartModule} from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,NvidiaStockComponent, CallbackComponentComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HighchartsChartModule,
    CommonModule,HttpClientModule,
    SocialLoginModule.initialize({
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('146189544058-tmlr7e7bqml9lft2ap0i7jicrsk1c9mj.apps.googleusercontent.com'),
        },
      ],
    }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
