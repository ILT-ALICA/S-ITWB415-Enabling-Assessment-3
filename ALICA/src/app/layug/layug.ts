import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-layug',
  styleUrl: './layug.scss',
  templateUrl: './layug.html',
})
export class Layug {

  name = 'Charlz Edison Layug';

  imagePath = 'assets/images/layug.jpg';

  description = signal('');

  showDescription() {
    this.description.set(
      'I am an IT student interested in programming, web development, and doing creative works.'
    );
  }

}
