import { Component, signal } from '@angular/core';
import { Ramos } from './ramos/ramos';
import { Umandal } from './umandal/umandal';
import { Martin } from './martin/martin';
import { Padolina } from './padolina/padolina';
import { Layug } from './layug/layug';

@Component({
  imports: [Ramos, Umandal, Martin, Padolina, Layug],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ALICA');
}
