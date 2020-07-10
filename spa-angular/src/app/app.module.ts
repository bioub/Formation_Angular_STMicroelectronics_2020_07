import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UsersModule } from "./users/users.module";
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { UserService } from './users/user.service';
import { UserHttpService } from './users/user-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    UsersModule,
    AppRoutingModule, // attention à la **, mettre ce module en dernier
  ],
  providers: [
    // si un composant demande UserService, il recevra une instance de UserHttpService
    // (très utile dans les tests automatisés)
    { provide: UserService, useExisting: UserHttpService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
