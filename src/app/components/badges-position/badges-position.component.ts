
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-badges-position',
  templateUrl: './badges-position.component.html',
  styleUrl: './badges-position.component.css',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatIconModule]
})

export class BadgesPositionComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
