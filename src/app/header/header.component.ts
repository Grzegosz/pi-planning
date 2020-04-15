import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  selectedMenu = 0;

  onMenuSelected(menuItem) {
    this.selectedMenu = this.selectedMenu === menuItem ? 0 : menuItem;
  }

}
