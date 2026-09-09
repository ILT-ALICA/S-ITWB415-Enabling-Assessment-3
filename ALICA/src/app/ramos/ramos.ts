import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'app-ramos',
  styleUrl: './ramos.scss',
  templateUrl: './ramos.html',
})
export class Ramos {
  name = signal('Lenard Kristan A. Ramos');
   imagePath = signal('assets/images/ramos.png');
   description = signal('');

  showDescription() {
    this.description.set(
      'With full-stack innovations at the core of my work,  I create functional ' +
        'web apps through the use of contemporary frameworks, strong APIs, ' +
        'and efficient databases, taking intricate technological concepts to  ' +
        'reality.'
    );
  }
}
