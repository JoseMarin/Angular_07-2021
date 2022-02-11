import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters:any = null;

  constructor(private characterService:CharacterService) { }

  ngOnInit(){
    this.characterService.retornar()
      .subscribe( result =>  this.characters = result)
  }


}
