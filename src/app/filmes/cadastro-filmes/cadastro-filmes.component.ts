import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { Alert } from 'src/app/shared/models/alert';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  id: number;
  cadastro: FormGroup;
  generos: Array<string>;

  get f(){
    return this.cadastro.controls
  }

  constructor(public validation: ValidarCamposService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private filmeService: FilmesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']

    if(this.id){
      this.filmeService.view(this.id).subscribe((film: Film)=> {
        this.createForm(film)
      })
    } else {
      this.createForm(this.createBlankForm())
    }


    this.generos = ['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção Cientifíca', 'Comédia', 'Drama']

  }

  submit(): void {
    this.cadastro.markAllAsTouched()
    if(this.cadastro.invalid){
      return;
    }
    // alert("Cadastrado:'\n\n" + JSON.stringify(this.cadastro.value, null , 4))
    const filme = this.cadastro.getRawValue() as Film
    if(this.id){
      filme.id = this.id;
      this.edit(filme);
    } else {
      this.save(filme); 
    }
  }

  eraseForm(): void {
    this.cadastro.reset();
  }

  private createForm(film: Film):void{
    this.cadastro = this.fb.group({
      titulo: [film.titulo, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlFoto: [film.urlFoto, [Validators.minLength(10)]],
      dtLancamento: [film.dtLancamento, [Validators.required]],
      descricao: [film.descricao],
      nota: [film.nota, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMdb: [film.urlIMdb, Validators.minLength(10)],
      genero: [film.genero, [Validators.required]]
    });
  }

  private createBlankForm():Film{
    return {
      id: null,
      titulo: null,
      urlFoto : null,
      dtLancamento: null,
      descricao: null,
      nota: null,
      urlIMDb: null,
      genero: null,
    } as Film
  }

  private save(filme: Film): void{
    this.filmeService.save(filme).subscribe(()=> {
      const config = {
        data: {

          btnSuccess: 'Ir para listagem',
          btnCancel: 'Cadastrar novo filme',
          colorBtnCancel: 'primary',
          haveClose: true
        } as Alert
      }
      const dialogRef = this.dialog.open(AlertComponent, config)
      dialogRef.afterClosed().subscribe((option: boolean) => {
        if(option){
          this.router.navigateByUrl('filmes')
        } else {
          this.eraseForm();
        }
      })
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao salvar',
          descricao: 'Houve algum erro ao tentar realizar o cadastro, tente novamente mais tarde',
          btnSuccess: 'Fechar',
          colorBtnSuccess: 'warn'
        } as Alert
      }
      this.dialog.open(AlertComponent, config)
    })
  }
  private edit(filme: Film): void{
    this.filmeService.edit(filme).subscribe(()=> {
      const config = {
        data: {
          descricao: 'Registro atualizado com sucesso',
          btnSuccess: 'Ir para listagem',
        } as Alert
      }
      const dialogRef = this.dialog.open(AlertComponent, config)
      dialogRef.afterClosed().subscribe(() => {this.router.navigateByUrl('filmes')})
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao editar registro',
          descricao: 'Houve algum erro ao tentar realizar a edição, tente novamente mais tarde',
          btnSuccess: 'Fechar',
          colorBtnSuccess: 'warn'
        } as Alert
      }
      this.dialog.open(AlertComponent, config)
    })
  }

}
