import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CallbackComponentComponent} from './callback-component/callback-component.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: 'callback', component: CallbackComponentComponent },
  { path: '', component: AppComponent }  // Default route to the login button
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
