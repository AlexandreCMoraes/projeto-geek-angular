import { AnimeTop } from './../interface/anime-top';
import { Component, OnInit } from '@angular/core';
import { AnimeMangaService } from '../services/anime-manga.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  constructor(private animesservice: AnimeMangaService) { }

  ngOnInit(): void {
    this.mainAnime();
  }
  // traz 50 animes na tela
  animesTop: AnimeTop[] = []
  mainAnime() {
    this.animesservice.pagAnime(this.btnPage).subscribe(data => {
      this.animesTop = data.top
    })
  }

  // moreAnime traz mais animes na tela clicando no botao
  btnPage: number = 1
  public moreAnime() {
    this.btnPage++
    this.animesservice.pagAnime(this.btnPage).subscribe(data => {
      data.top.forEach((element: AnimeTop) => {
        this.animesTop.push(element)
      });
    })
    console.log("Chamou")
  }
}
