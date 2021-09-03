import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letras'
})
export class LetrasPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != null) {
      if (args=='ingles')
        switch (value) {
          case 1: return 'one';
          case 2: return 'two';
          case 3: return 'three';
          case 4: return 'four';
          case 5: return 'five';
          case 6: return 'six';
          case 7: return 'seven';
        }
        if (args=='portugues')
        switch (value) {
          case 1: return 'um';
          case 2: return 'dois';
          case 3: return 'três';
          case 4: return 'quatro';
          case 5: return 'cinco';
          case 6: return 'seis';
          case 7: return 'sete';
        }
    }
    switch (value) {
      case 1: return 'uno';
      case 2: return 'dos';
      case 3: return 'tres';
      case 4: return 'cuatro';
      case 5: return 'cinco';
      case 6: return 'seis';
      case 7: return 'siete';
    }
    return null;
  }

}
