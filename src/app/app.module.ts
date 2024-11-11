import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartModule} from 'primeng/chart';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NvidiaStockComponent} from './nvidia-stock/nvidia-stock.component';

@NgModule({
  declarations: [
    AppComponent,NvidiaStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ChartModule,CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
