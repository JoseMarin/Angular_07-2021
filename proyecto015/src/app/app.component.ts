import { Component } from '@angular/core';
import  { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto015';

  articulos:any = null;

  constructor(private articulosService: ArticulosService) {}

  ngOnInit() {
    this.articulosService.retornar()
      .subscribe( result =>  this.articulos = result)
  }

}
