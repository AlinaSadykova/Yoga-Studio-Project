import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "location", component: LocationComponent},
  { path: "", pathMatch: "full", redirectTo: "/"},
  { path: "**", pathMatch: "full", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
