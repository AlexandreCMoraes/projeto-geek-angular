import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://api.jikan.moe/v3/top';

  /**
   * pagAnime
   */
  public pagAnime(): Observable<any> {
    return this.httpClient.get(this.url + '/anime')
  }
}
