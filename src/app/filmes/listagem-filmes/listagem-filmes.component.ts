import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {debounceTime} from 'rxjs/operators'
import { FilmesService } from 'src/app/core/filmes.service';
import { ConfigParams } from 'src/app/shared/models/config-params';
import { Film } from 'src/app/shared/models/film';


@Component({
  selector: 'dio-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {

  readonly noPhoto = "https://i.pinimg.com/originals/c8/50/ff/c850ff543a0485c5f53aacb4cf024dca.png"

  config: ConfigParams = {
    page: 0,
    limit: 4,
  }
  films: Film[] = [];
  filterList: FormGroup;
  generos: Array<String>

  constructor(private filmeService: FilmesService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.filterList = this.fb.group({
      text: [''],
      genre: ['']
    })

    this.filterList.get('text').valueChanges
    .pipe(debounceTime(900))
    .subscribe((val: string)=> {
      this.config.search = val;
      this.resetSearch()
    })
    this.filterList.get('genre').valueChanges.subscribe((val: string)=> {
      this.config.campo = {type: 'genero', value: val}
      this.resetSearch()
    })

    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção Cientifíca', 'Comédia', 'Drama']
    this.listFilms();

  }

  open(id: number) : void {
    this.router.navigateByUrl(`/filmes/${id}`);
  }

  onScroll(): void {
    this.listFilms();
  }

  private listFilms(): void {
    this.config.page++;
    this.filmeService.list(this.config).subscribe((films: Film[]) => this.films.push(...films))
  }


  private resetSearch(): void {
    this.config.page = 0;
    this.films = []
    this.listFilms()
  }

}
