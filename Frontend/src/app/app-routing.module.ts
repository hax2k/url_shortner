import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllurlsComponent } from './Components/Pages/allurls/allurls.component';
import { HomeComponent } from './Components/Templates/Home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'urls', component: AllurlsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
