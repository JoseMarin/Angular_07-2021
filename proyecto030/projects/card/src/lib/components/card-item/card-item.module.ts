import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item.component';



@NgModule({
  declarations: [CardItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CardItemComponent]
})
export class CardItemModule { }
