import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { PageActionComponent } from './page/page-action/page-action.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'login', component: LoginComponent},
  { path: 'action/:id', component: PageActionComponent},
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
