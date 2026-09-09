import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-padolina',
  styleUrl: './padolina.scss',
  templateUrl: './padolina.html',
})
export class Padolina {
  name = signal('Ian Charles Padolina');
  imagePath = signal('assets/images/padolina.jpg');
  description = signal('');

  showDescription() {
    this.description.set('I am an Information Technology student at DLSU-D who enjoys graphic design, content creation, and competitive running. I am also active in student organizations like Lasallian Student Ambassadors and Samahang Lasalyano.');
  }

}
