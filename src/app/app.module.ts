import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { StudentReducerFunction } from "./SimpleReducerExampleOne/post.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ AllStudents: StudentReducerFunction}),
    StoreDevtoolsModule.instrument({ maxAge:26 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
