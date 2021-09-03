import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto016';

  nombre = 'Jose Marin';
  saldo = 1560.50;
  dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  articulos = [{
      codigo: 1,
      descripcion: "naranjas",
      precio: 12.33
    },{
      codigo: 2,
      descripcion: "manzanas",
      precio: 54
    }];
  fechaActual = new Date();
}
