import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Alert } from '../../models/alert';


@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  alerta = {
    titulo : "Dado salvo!",
    descricao : "Seu registro foi cadastrado com sucesso!",
    btnSuccess : "Ok",
    btnCancel : "Cancelar",
    colorBtnSuccess : 'accent',
    colorBtnCancel : 'warn',
    haveClose : false
  } as Alert



  constructor(public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert) {}

    ngOnInit(){
     if(this.data){
       this.alerta.titulo = this.data.titulo || this.alerta.titulo;
       this.alerta.descricao = this.data.descricao || this.alerta.descricao;
       this.alerta.btnSuccess = this.data.btnSuccess || this.alerta.btnSuccess;
       this.alerta.btnCancel = this.data.btnCancel || this.alerta.btnCancel;
       this.alerta.colorBtnSuccess = this.data.colorBtnSuccess || this.alerta.colorBtnSuccess;
       this.alerta.colorBtnCancel = this.data.colorBtnCancel || this.alerta.colorBtnCancel;
       this.alerta.haveClose = this.data.haveClose || this.alerta.haveClose;
     } 
    }


}
