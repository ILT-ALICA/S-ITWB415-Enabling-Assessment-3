import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-martin',
  styleUrl: './martin.scss',
  templateUrl: './martin.html',
})
export class Martin {
  name = signal('Aiven Allyson Martin');
}