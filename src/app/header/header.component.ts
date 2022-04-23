import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isNavBarMenuOpened = false;
  isPageScrolled = false;

  onNavBarMenuToggle() {
    this.isNavBarMenuOpened = !this.isNavBarMenuOpened;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(_: any) {
    this.isPageScrolled = window.pageYOffset > 10;
  }
}
