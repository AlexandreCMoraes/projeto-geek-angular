import { AnimeTop } from './../interface/anime-top';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeMangaService } from '../services/anime-manga.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// const translate = require('google-translate-api');

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  detailsContent !: AnimeTop
  // sera colocado no html para renderizar em tela
  hasContent: boolean = false
  // se o conteudo for ou nao o desejado para renderizar
  trailerUrl!: SafeUrl

  constructor(private route: ActivatedRoute, private serviceDetails: AnimeMangaService, private sanitizer: DomSanitizer) {

    this.route.params.subscribe(parameters => {
      this.serviceDetails.pagDetails(parameters['tipo'], parameters['anime.mal_id']).subscribe((data: AnimeTop) => {
        // assim que tiver resposta da api com esses parametros que foram definidos...
        console.log(data)
        this.detailsContent = data
        // detailsContent sera do tipo AnimeTop (array) com as infos
        if (parameters['tipo'] == '/anime') {
          this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.detailsContent.trailer_url)
          // pega a info do array AnimeTop e diz que é seguro e abaixo mostra na tela se for anime
          this.hasContent = true
        }
      })
    });
  }

  ngOnInit(): void {
  }


  //   translate(texto:string, {to: 'pt'}).then((res :any)=> {
  //     console.log(res.text);
  //     //=> I speak English
  //     console.log(res.from.language.iso);
  //     //=> nl
  // }).catch(err => {
  //     console.error(err);
  // });
}
