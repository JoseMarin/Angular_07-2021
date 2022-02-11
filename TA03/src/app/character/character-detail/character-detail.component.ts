import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  characters:any = null;
  id:any = null;

  constructor(private _route: ActivatedRoute, private characterService:CharacterService) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');
    this.characterService.getById(this.id)
      .subscribe( result =>  this.characters = result)

  }

}
