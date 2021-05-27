import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://api.jikan.moe/v3/top'

  /**
 * pagMang
 */
  public pagManga(): Observable<any> {
    return this.httpClient.get(this.url + '/manga')
  }
}