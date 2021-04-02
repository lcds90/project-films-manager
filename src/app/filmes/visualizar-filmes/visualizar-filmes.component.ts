import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { Alert } from 'src/app/shared/models/alert';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'dio-visualizar-filmes',
  templateUrl: './visualizar-filmes.component.html',
  styleUrls: ['./visualizar-filmes.component.scss']
})
export class VisualizarFilmesComponent implements OnInit {

  id: number;
  film: Film;
  constructor(public dialog: MatDialog, private activatedRoute: ActivatedRoute, private filmesService: FilmesService, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']
    this.showDetails()
  }

  edit(): void {
    this.router.navigateByUrl("/filmes/cadastro/" + this.id);
  }

  delete(): void{
    const config = {
      data: {

        titulo: 'Tem certeza que deseja excluir?',
        descricao: 'Caso tenha certeza, clique em Ok',
        colorBtnCancel: 'primary',
        colorBtnSuccess: 'warn',
        haveClose: true
      } as Alert
    }
    const dialogRef = this.dialog.open(AlertComponent, config)
    dialogRef.afterClosed().subscribe((option: boolean) => {
      if(option){
        this.filmesService.delete(this.id).subscribe(()=> {
          this.router.navigateByUrl('filmes')
        })
      }
    })
  }

  private showDetails():void{
    this.filmesService.view(this.id).subscribe((film: Film)=> this.film = film)
  }

}
