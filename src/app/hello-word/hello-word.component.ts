import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-word',
  template: '<h1>¡Hola, Mundo!</h1>',
  styleUrls: ['./hello-word.component.css']
})
export class HelloWordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
