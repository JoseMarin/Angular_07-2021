import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      Bienvenido a mi primera Lib!!!
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
