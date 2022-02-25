import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardItemModule } from '../card-item/card-item.module';
import { CardComponent } from './card.component';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CardItemModule,
    BrowserModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
