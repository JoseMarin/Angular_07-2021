import { Component, Input, OnInit } from '@angular/core';
import { ICardItem } from '../../interfaces/card.interface';

@Component({
  selector: 'lib-card',
  template: `
    <div class="container">
  <main class="grid">
    <article *ngFor="let item of cardItems">
        <lib-card-item [cardItem]="item"></lib-card-item>
    </article>
  </main>
</div>
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {
  @Input() cardItems: Array<ICardItem> = [];
  constructor() { }

  ngOnInit(): void {
    console.log("Items------------/////");
    console.log(this.cardItems);
  }

}
