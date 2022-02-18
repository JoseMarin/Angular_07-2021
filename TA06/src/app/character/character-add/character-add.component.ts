import { Component, OnInit } from '@angular/core';
import {Character} from 'src/app/models/character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-add',
  templateUrl: './character-add.component.html',
  styleUrls: ['./character-add.component.css']
})
export class CharacterAddComponent implements OnInit {

  character: Character = {
    id: 0,
    name: ''
  };

  submitted = false;

  constructor(private charactersService: CharacterService) { }

  ngOnInit(): void {
  }

  saveCharacter(): void {
    const data = {
      id: this.character.id,
      name: this.character.name,
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: "Earth",
      location: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    };

    this.charactersService.add(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCharacter(): void {
    this.submitted = false;
    this.character = {
      id: 0,
      name: ''
    };
  }

}
