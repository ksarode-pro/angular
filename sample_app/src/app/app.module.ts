import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from './shared/shadow/shared.module';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports : [
    BrowserModule,
    SharedModule,
    TaskModule,    
  ]
})
export class AppModule { }  
