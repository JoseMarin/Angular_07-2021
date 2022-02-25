import { Component, OnInit } from '@angular/core';
import { ICardItem } from 'projects/card/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My-lib';
  elements: Array<ICardItem> = [
    {
      title:'Titulo 1',
      description: 'Descripcion 1',
      image: 'https://picsum.photos/600/400?image=1015'
    },
    {
      title:'Titulo 2',
      description: 'Descripcion 2',
      image: 'https://picsum.photos/600/400?image=1004'
    },
    {
      title:'Titulo 3',
      description: 'Descripcion 3',
      image: 'https://picsum.photos/600/400?image=1023'
    },
    {
      title:'Titulo 4',
      description: 'Descripcion 4',
      image: 'https://picsum.photos/600/400?image=1011'
    },
    {
      title:'Titulo 5',
      description: 'Descripcion 5',
      image: 'https://picsum.photos/600/400?image=1022'
    },
    {
      title:'Titulo 6',
      description: 'Descripcion 6',
      image: 'https://picsum.photos/600/400?image=1020'
    },
    {
      title:'Titulo 7',
      description: 'Descripcion 7',
      image: 'https://picsum.photos/600/400?image=1016'
    },
    {
      title:'Titulo 8',
      description: 'Descripcion 8',
      image: 'https://picsum.photos/600/400?image=1018'
    }
  ];

  ngOnInit(): void {
    console.log(this.elements);
  }
}
