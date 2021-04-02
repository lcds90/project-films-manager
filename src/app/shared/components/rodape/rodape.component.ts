import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dio-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent implements OnInit {

  date = Date();

  constructor() { }

  ngOnInit() {

  }

}
