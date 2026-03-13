import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarProps } from '../../props/nav-bar-props';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  navBarItems = input<NavBarProps[]>([]);
}

