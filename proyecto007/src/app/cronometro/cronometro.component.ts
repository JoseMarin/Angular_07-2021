import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  segundo=0;

  @Input() inicio:any;
  @Output() multiplo10 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.segundo = this.inicio;
    setInterval(() => {
      this.segundo++;
      if (this.segundo % 10 == 0)
        this.multiplo10.emit(this.segundo);
    }, 1000);
  }

}
