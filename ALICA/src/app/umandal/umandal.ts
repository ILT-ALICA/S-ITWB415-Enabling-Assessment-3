import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-umandal',
  styleUrl: './umandal.scss',
  templateUrl: './umandal.html',
})
export class Umandal {
  name = signal('Alen Mikel Umandal');
}
