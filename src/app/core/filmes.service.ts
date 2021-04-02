import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../shared/models/film';
import { ConfigParams } from '../shared/models/config-params';
import { ConfigParamsService } from './config-params.service';

const URL = "http://localhost:3000/filmes/";

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient, 
      private configService: ConfigParamsService) { }

  save(film: Film): Observable<Film>{

    return this.http.post<Film>(URL, film);

  }

  list(config: ConfigParams): Observable<Film[]>{
    const configParams = this.configService.configParams(config)
    return this.http.get<Film[]>(URL, {params: configParams})
  }

  view(id: number): Observable<Film>{
    return this.http.get<Film>(URL + id);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(URL + id);
  }

  edit(film: Film):Observable<Film>{
    return this.http.put<Film>(URL + film.id, film);
  }

}
