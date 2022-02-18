import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characters:any = null;
  id:any = null;

  constructor(private _route: ActivatedRoute, private characterService:CharacterService, private router: Router) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');
    this.characterService.getById(this.id)
      .subscribe( result =>  this.characters = result)

  }

  // updateCharacter(): void {
  //   this.message = '';

  //   this.characterService.update(this.currentBook.id, this.currentBook)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = response.message ? response.message : 'This Character was updated successfully!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  deleteCharacter(): void {
    this.characterService.delete(this.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/characters']);
        },
        error => {
          console.log(error);
        });
  }

  updateStatus(status: string): void {
    const data = {
      id: this.characters.id,
      name: this.characters.name,
      status: status,
      species: this.characters.species,
      gender: this.characters.gender,
      origin: this.characters.origin,
      location: this.characters.location,
      image: this.characters.image
    };


    this.characterService.update(this.characters.id, data)
      .subscribe(
        response => {
          this.characters.status = status;
          console.log(response);
          this.router.navigate([`/characters/`]);
        },
        error => {
          console.log(error);
        });
  }

}
