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
