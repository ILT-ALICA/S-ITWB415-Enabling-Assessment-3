import { Component, signal } from '@angular/core';
import { MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  imports: [MemberPreview],
  selector: 'app-padolina',
  styleUrl: './padolina.scss',
  templateUrl: './padolina.html',
})
export class Padolina {
  name = signal('Ian Charles Padolina');
  imagePath = signal('assets/images/padolina.png');
  description = signal(
    'I am an Information Technology student at DLSU-D who enjoys graphic ' +
    'design, content creation, competitive running, and ' +
    'student organizations.',
  );
}