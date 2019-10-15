import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      {{ rando }}
    </p>
  `,
  styles: []
})

export class SquareComponent{

  @Input() value: 'X' | 'O';

  constructor(){
    setInterval(() => this.rando = Math.random(), 500);
  }
}
