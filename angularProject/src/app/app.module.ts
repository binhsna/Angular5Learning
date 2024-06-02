import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesComponent} from './movies/movies.component';
import {MessagesComponent} from './messages/messages.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent,
        MessagesComponent,
        MovieDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
