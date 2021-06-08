import { AnimeTop } from './../interface/anime-top';
import { Component, OnInit } from '@angular/core';
import { AnimeMangaService } from '../services/anime-manga.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {

  constructor(private mangaservice: AnimeMangaService) { }

  ngOnInit(): void {
    this.mainManga();
  }
  // traz 50 mangas na tela
  mangasTop: AnimeTop[] = []
  mainManga() {
    this.mangaservice.pagManga(this.btnPage).subscribe(data => {
      this.mangasTop = data.top
    })
  }

  /* moreManga traz mais mangas na tela clicando no botao*/
  btnPage: number = 1

  public moreManga() {
    this.btnPage++
    this.mangaservice.pagManga(this.btnPage).subscribe(data => {
      data.top.forEach((element: AnimeTop) => {
        this.mangasTop.push(element)
      });
    })
    console.log("Chamou")
  }
}