import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ramos',
  styleUrl: './ramos.scss',
  templateUrl: './ramos.html',
})
export class Ramos {
  name = signal('Lenard Kristan A. Ramos');
   imagePath = signal('assets/images/ramos.png');
}
