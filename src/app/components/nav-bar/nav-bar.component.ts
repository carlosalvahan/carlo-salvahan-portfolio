import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarProps } from '../../props/nav-bar-props';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  navBarItems = input<NavBarProps[]>([]);
  readonly imageDp = 'Alodp2.png';
  showNav: boolean = false;

  showSideNav() {
    this.showNav = true;
  }

  hideSideNav() {
    this.showNav = false;
  }
}

