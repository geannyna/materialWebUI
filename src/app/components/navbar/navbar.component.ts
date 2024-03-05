
import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'sidenav',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
 
})
export class SidenavPositionExample {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
