import {NgModule} from '@angular/core';
// import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from "./movies/movies.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'dashboard', component: DashboardComponent}
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
