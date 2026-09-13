import { Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatButtonModule],
  selector: 'app-member-preview',
  styleUrl: './member-preview.scss',
  templateUrl: './member-preview.html',
})
export class MemberPreview {
  name = input<string>('');
  imagePath = input<string>('');
  description = input<string>('');

  displayedDescription = signal('');

  showDescription() {
    if (this.displayedDescription()) {
      this.displayedDescription.set('');
      return;
    }

    this.displayedDescription.set(this.description());
  }
}
