import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {  EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

// All Reducers
// import { PostsReducerFunction } from "./StoreData/Reducers/post.reducer";
// import { ExpertReducerFunction } from './StoreData/Reducers/expert.reducer';

import { reducers } from './StoreData/Reducers/index';
import { effects } from './StoreData/Effects/index';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ExpertManagementComponent } from './Components/expert-management/expert-management.component';
import { LoginComponent } from './Components/login/login.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { UsersComponent } from './Components/users/users.component';
import { PostManagementComponent } from './Components/post-management/post-management.component';
import { ExpertDetailComponent } from './Components/expert-detail/expert-detail.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'experts', component: ExpertManagementComponent },
    { path: 'expertDetail/:Id', component: ExpertDetailComponent },
    { path: 'posts', component: PostManagementComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpertManagementComponent,
    LoginComponent,
    PageNotFoundComponent,
    UsersComponent,
    PostManagementComponent,
    ExpertDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge:26 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
