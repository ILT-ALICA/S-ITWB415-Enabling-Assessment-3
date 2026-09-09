import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-martin',
  styleUrl: './martin.scss',
  templateUrl: './martin.html',
})
export class Martin {
  name = signal('Aiven Allyson Martin');

  imagePath = signal('assets/images/martin.png');

  description = signal('');

showDescription() {
  this.description.set(
    'I am an Information Technology student who enjoys learning about web development and creating practical applications using modern technologies.'
  );
}
}