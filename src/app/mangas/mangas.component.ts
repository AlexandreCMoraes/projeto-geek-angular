import { AnimeTop } from './../interface/anime-top';
import { MangaService } from './../services/manga.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.css']
})
export class MangasComponent implements OnInit {

  constructor(private mangaservice: MangaService) { }

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