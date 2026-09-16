import { Component, signal } from '@angular/core';
import { MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  imports: [MemberPreview],
  selector: 'app-layug',
  styleUrl: './layug.scss',
  templateUrl: './layug.html',
})
export class Layug {
  name = signal('Charlz Edison Layug');
  imagePath = signal('assets/images/layug.jpg');
  description = signal(      
    'I am an IT student interested in programming, web development, ' +
    'and doing creative works.'
  );
}
