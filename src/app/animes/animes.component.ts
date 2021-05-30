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

  animesTop: AnimeTop[] = []

  mainAnime() {
    this.animesservice.pagAnime().subscribe(data => {
      this.animesTop = data.top
    }) 
  }
}