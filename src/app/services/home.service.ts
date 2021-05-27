import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  /**
   * homeAnimeRecente
   */
  url: string = 'https://api.jikan.moe/v3/top';
  public homeAnimeRecente(): Observable<any> {
    return this.httpClient.get(this.url + '/anime')
  }

  /**
   * homeNewAnime
   */
  public homeNewAnime(): Observable<any> {
    return this.httpClient.get(this.url + "/anime/1/airing")
  }

  /**
   * homeManga
   */
  public homeManga(): Observable<any> {
    return this.httpClient.get(this.url + "/manga/1/novels")
  }
}
