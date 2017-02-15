import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UserComponent }  from './component/user.component';
import { AboutComponent }  from './component/about.component';
import  { FormsModule} from '@angular/forms';
import  { HttpModule } from '@angular/http';
import  { routing } from './app.router';


@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule ,routing],
  declarations: [ AppComponent , UserComponent ,AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
