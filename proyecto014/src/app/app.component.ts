import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyecto014';

  articulos:any = null;

  constructor(private articulosServicio: ArticulosService) {
  }

  ngOnInit() {
    this.articulos=this.articulosServicio.retornar();
  }
}
