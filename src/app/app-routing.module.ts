import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { AccueilComponent } from './page/accueil/accueil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
