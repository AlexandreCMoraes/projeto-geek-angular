import { AnimeTop } from './../interface/anime-top';
import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.buscarTopAnime();
    this.buscarNewAnime();
    this.buscarManga();
  }
  /**
   * name
   */
  animesTop: AnimeTop[] = []

  public buscarTopAnime() {
    this.homeService.homeAnimeRecente().subscribe(data => {
      let array: AnimeTop[] = []
      data.top.forEach((element: AnimeTop, index: number) => {
        if (index <= 4) {
          array.push(element)
        }
        else {
          this.animesTop = array;
          return;
        }
      });
    })
  }

  /**
   * name
   */
  animesNew: AnimeTop[] = []

  public buscarNewAnime() {
    this.homeService.homeNewAnime().subscribe(data => {
      let array: AnimeTop[] = []
      data.top.forEach((element: AnimeTop, index: number) => {
        if (index <= 4) {
          array.push(element)
        } else
          this.animesNew = array;
        return
      });
    })
  }

  mangasNew: AnimeTop[] = []

  buscarManga() {
    this.homeService.homeManga().subscribe(data => {
      let array: AnimeTop[] = []
      data.top.forEach((element: AnimeTop, index: number) => {
        if (index <= 4) {
          array.push(element)
          this.mangasNew = array
        } else {
          return
        }
      });
    })
  }
}
