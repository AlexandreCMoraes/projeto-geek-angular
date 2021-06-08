import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeMangaService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://api.jikan.moe/v3';

  /* pagAnime traz api sobre animes */
  public pagAnime(pagination: number): Observable<any> {
    return this.httpClient.get(this.url + '/top/anime/' + pagination)
  }

  /* pagManga traz api sobre manga */
  public pagManga(pagination: number): Observable<any> {
    return this.httpClient.get(this.url + '/top/manga/'+ pagination)
  }

  /* pagDetails recebe parametros de anime ou manga(type) e o id(id) dos mesmos para mostrar info */
  public pagDetails(type: string, id: string): Observable<any> {
    return this.httpClient.get(this.url + type + '/' + id)
  }
}
