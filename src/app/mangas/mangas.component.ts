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
  
  mangasTop: AnimeTop[] = []

  mainManga() {
    this.mangaservice.pagManga().subscribe(data => {
      this.mangasTop = data.top
      
      // console.log(data)
    })
  }
}