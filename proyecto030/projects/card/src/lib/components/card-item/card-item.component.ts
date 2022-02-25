import { Component, Input, OnInit } from '@angular/core';
import { ICardItem } from '../../interfaces/card.interface';

@Component({
  selector: 'lib-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() cardItem?: ICardItem;
  constructor() { }

  ngOnInit(): void {
    console.log("Card Item------------/////");
    console.log(this.cardItem);
  }

}
