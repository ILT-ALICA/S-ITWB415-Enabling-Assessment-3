import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MemberPreview } from '../shared/member-preview/member-preview';
@Component({
  imports: [MatButtonModule, MemberPreview],
  selector: 'app-ramos',
  styleUrl: './ramos.scss',
  templateUrl: './ramos.html',
})
export class Ramos {
  name = signal('Lenard Kristan A. Ramos');
  imagePath = signal('assets/images/ramos.png');
  description = signal(
    'With full-stack innovations at the core of my work, I create ' +
    'functional web apps using contemporary frameworks, strong APIs, ' +
    'and efficient databases.');
}
