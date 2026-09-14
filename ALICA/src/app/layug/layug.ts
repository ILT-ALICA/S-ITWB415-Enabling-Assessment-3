import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'app-layug',
  styleUrl: './layug.scss',
  templateUrl: './layug.html',
})
export class Layug {
  name = signal('Charlz Edison Layug');
  imagePath = signal('assets/images/layug.jpg');
  description = signal('');

  showDescription() {
    this.description.set(
      'I am an IT student interested in programming, web development, ' +
      'and doing creative works.',
    );
  }
}

