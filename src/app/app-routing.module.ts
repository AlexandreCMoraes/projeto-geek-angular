import { DetalhesComponent } from './detalhes/detalhes.component';
import { ContatoComponent } from './contato/contato.component';
import { MangasComponent } from './mangas/mangas.component';
import { AnimesComponent } from './animes/animes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagErrorComponent } from './pag-error/pag-error.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "home/detalhes",
    component: DetalhesComponent
  },
  {
    path: "anime",
    component: AnimesComponent
  },
  {
    path: 'manga',
    component: MangasComponent
  },
  {
    path: 'fale-conosco',
    component: ContatoComponent
  },
  {
    path: 'detalhes/:tipo/:anime.mal_id',
    component: DetalhesComponent
  },
  {
    path: '**',
    component: PagErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
