import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GameComponent } from './components/acceuil/game/game.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { LoginComponent } from './page/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BandeauPresentationComponent } from './components/acceuil/bandeau-presentation/bandeau-presentation.component';
import { PresentationComponent } from './components/acceuil/presentation/presentation.component';
import { TeamComponent } from './components/acceuil/team/team.component';
import { ActionsComponent } from './components/acceuil/actions/actions.component';
import { PageActionComponent } from './page/page-action/page-action.component';
import { SkateparkConseilComponent } from './page/skatepark-conseil/skatepark-conseil.component';
import { BackOfficeComponent } from './page/back-office/back-office.component';
import { TeamCardOfficeComponent } from './components/back-office/team-card-office/team-card-office.component';
import { ActionOfficeComponent } from './components/back-office/action-office/action-office.component';
import { TeamCardComponent } from './components/simpleComponents/team-card/team-card.component';
import { CardActionComponent } from './components/simpleComponents/card-action/card-action.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameComponent,
    AccueilComponent,
    LoginComponent,
    FooterComponent,
    BandeauPresentationComponent,
    PresentationComponent,
    TeamComponent,
    ActionsComponent,
    PageActionComponent,
    SkateparkConseilComponent,
    BackOfficeComponent,
    TeamCardOfficeComponent,
    ActionOfficeComponent,
    TeamCardComponent,
    CardActionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
