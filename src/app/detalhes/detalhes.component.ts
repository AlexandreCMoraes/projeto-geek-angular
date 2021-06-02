import { AnimeTop } from './../interface/anime-top';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeMangaService } from '../services/anime-manga.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  detalhes !: AnimeTop
  expression: boolean = false
  trailerUrl!: SafeUrl

  constructor(private route: ActivatedRoute, private serviceDetails: AnimeMangaService, private sanitizer: DomSanitizer) {


    this.route.params.subscribe(parameters => {
      this.serviceDetails.pagDetails(parameters['tipo'], parameters['anime.mal_id']).subscribe((data: AnimeTop) => {
        console.log(data)
        this.detalhes = data

        if (parameters['tipo'] == '/anime') {
          this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.detalhes.trailer_url)
          this.expression = true
        }
      })
    });
  }

  ngOnInit(): void {
  }

}
