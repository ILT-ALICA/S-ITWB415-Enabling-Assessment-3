import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-padolina',
  styleUrl: './padolina.scss',
  templateUrl: './padolina.html',
})
export class Padolina {
  name = signal('Ian Charles Padolina');
}
