import { AnimeTop } from './../interface/anime-top';
import { AnimesService } from './../services/animes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

  constructor(private animesservice: AnimesService) { }

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