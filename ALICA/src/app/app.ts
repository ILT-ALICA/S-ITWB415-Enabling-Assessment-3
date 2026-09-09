import { Component, signal } from '@angular/core';
import { Ramos } from './ramos/ramos';
import { Umandal } from './umandal/umandal';

@Component({
  imports: [Ramos, Umandal],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ALICA');
}
