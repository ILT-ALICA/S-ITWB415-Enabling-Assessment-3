import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MemberPreview } from '../shared/member-preview/member-preview';

@Component({
  imports: [MatButtonModule, MemberPreview],
  selector: 'app-umandal',
  styleUrl: './umandal.scss',
  templateUrl: './umandal.html',
})
export class Umandal {
  name = signal('Alen Mikel Umandal');
  imagePath = signal('assets/images/umandal.png');
  description = signal(
    'I specialize in web and full-stack development, working across ' +
      'both frontend and backend with modern tools and tech stacks, ' +
      'focusing on building practical applications with clean UI/UX, ' +
      'thoughtful database design, and solutions that solve real-world ' +
      'problems.'
  );
}
