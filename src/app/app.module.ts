import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnimesComponent } from './animes/animes.component';
import { MangasComponent } from './mangas/mangas.component';
import { ContatoComponent } from './contato/contato.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PagErrorComponent } from './pag-error/pag-error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimesComponent,
    MangasComponent,
    ContatoComponent,
    DetalhesComponent,
    NavbarComponent,
    FooterComponent,
    PagErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
