import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { PageActionComponent } from './page/page-action/page-action.component';
import { SkateparkConseilComponent } from './page/skatepark-conseil/skatepark-conseil.component';
import { BackOfficeComponent } from './page/back-office/back-office.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'login', component: LoginComponent},
  { path: 'action/:id', component: PageActionComponent},
  { path: 'skateparkConseil', component: SkateparkConseilComponent},
  { path: 'backOffice', component: BackOfficeComponent},
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
