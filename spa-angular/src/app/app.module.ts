import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UsersModule } from "./users/users.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    UsersModule,
    AppRoutingModule, // attention à la **, mettre ce module en dernier
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
