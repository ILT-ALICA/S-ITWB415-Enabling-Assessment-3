import { Component, signal } from '@angular/core';
import { Ramos } from './ramos/ramos';

@Component({
  imports: [Ramos],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ALICA');
}
