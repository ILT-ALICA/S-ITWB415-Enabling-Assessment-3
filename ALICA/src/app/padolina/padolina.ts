import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'app-padolina',
  styleUrl: './padolina.scss',
  templateUrl: './padolina.html',
})
export class Padolina {
  name = signal('Ian Charles Padolina');
  imagePath = signal('assets/images/padolina.png');
  description = signal('');

  showDescription() {
    this.description.set(
      'I am an Information Technology student at DLSU-D who enjoys graphic ' +
      'design, content creation, competitive running, and student organizations.',
    );
  }
}
