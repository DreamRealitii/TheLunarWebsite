import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreationsComponent } from './creations/creations.component';
import { CreationComponent } from './creation/creation.component';
import { PlaygroundComponent } from './playground/playground.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HobbyComponent } from './hobby/hobby.component';
import { DisplayComponent } from './display/display.component';
import { MyselfComponent } from './myself/myself.component';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        CreationsComponent,
        CreationComponent,
        PlaygroundComponent,
        HobbiesComponent,
        HobbyComponent,
        DisplayComponent,
        MyselfComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        AppRoutingModule], providers: [provideHttpClient(), provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
