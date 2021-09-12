import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { AccueilComponent } from './page/accueil/accueil.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: ''}
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
  
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
