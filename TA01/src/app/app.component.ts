import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TA01';

  nombre:string = "";
  cif:string = "";
  direccion:string = "";
  grupo:number = 2;


  cli={
    nombre:this.nombre,
    cif:this.cif,
    direccion:this.direccion,
    grupo:this.grupo
  }

  clientes = [{nombre:'Cliente 1', cif:'B 123', direccion:'C/ la la la', grupo:1},
              {nombre:'Cliente 2', cif:'A 334', direccion:'Av. lo lo lo', grupo:2}
              ];


  hayRegistros() {
    return this.clientes.length>0;
  }


  agregar() {
    for(let x=0;x<this.clientes.length;x++)
    if (this.clientes[x].nombre==this.cli.nombre)
    {
      alert('ya existe un cliente con dicho nombre');
      return;
    }
    this.clientes.push({nombre:this.cli.nombre,
                        cif:this.cli.cif,
                        direccion:this.cli.direccion,
                        grupo: this.cli.grupo });
    this.cli.nombre='';
    this.cli.cif='';
    this.cli.direccion='';
    this.cli.grupo=0;

  }


}
