import {NgModule} from '@angular/core';
// import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./movies/movies.component";

const routes: Routes = [
  {path: 'movies', component: MoviesComponent}
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes) // --> Khởi chạy đầu tiên khi app run
  ],
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule {
}
