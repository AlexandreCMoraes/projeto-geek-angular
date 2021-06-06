import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeTop } from '../interface/anime-top';

@Injectable({
  providedIn: 'root'
})
export class AnimeMangaService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://api.jikan.moe/v3';

  /* pagAnime traz api sobre animes */
  public pagAnime(): Observable<any> {
    return this.httpClient.get(this.url + '/top/anime')
  }

  /* pagManga traz api sobre manga */
  public pagManga(): Observable<any> {
    return this.httpClient.get(this.url + '/top/manga')
  }

  /* pagDetails recebe parametros de anime ou manga(type) e o id(id) dos mesmos para mostrar info */
  public pagDetails(type: string, id: string): Observable<any>{
    return this.httpClient.get(this.url +  type + '/' + id)
  }
}
