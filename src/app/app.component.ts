import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { BadgesPositionComponent } from "./components/badges-position/badges-position.component";
// todos los import van aqui
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatSlideToggleModule, MatSidenavModule, MatBadgeModule, MatButtonModule, MatIconModule, BadgesPositionComponent]
})
export class AppComponent {
  title = 'MaterialUI_Angular';
shouldRun: any;
}
