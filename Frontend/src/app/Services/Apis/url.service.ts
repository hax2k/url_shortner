import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortUrl } from 'src/app/Models/shortUrl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  baseUri: string = environment.url;

  constructor(private http: HttpClient) { }

  getAllShortUrl(): Observable<ShortUrl[]> {
    return this.http.get<ShortUrl[]>(this.baseUri);
  }
  getShortUrl(id: number): Observable<ShortUrl> {
    return this.http.get<ShortUrl>(`${this.baseUri}/${id}`);
  }
  postShortUrl(shortUrl: ShortUrl): Observable<ShortUrl> {
    return this.http.post<ShortUrl>(this.baseUri, shortUrl);
  }
  deleteShortUrl(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUri}/${id}`);
  }
}
