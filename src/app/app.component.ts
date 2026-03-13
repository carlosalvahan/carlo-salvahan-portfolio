import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImageComponent } from './shared/image/image.component';
import { NavBarProps } from './props/nav-bar-props';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carlo-salvahan-portfolio';

  navBarItems = [
    {...new NavBarProps('Home', '', 'fas fa-home', 'white-text'), isActive: true},
    new NavBarProps('Experience', '', 'fas fa-briefcase', 'yellow-text text-lighten-2'),
    new NavBarProps('Skills', '', 'fas fa-code', 'orange-text text-accent-1'),
    new NavBarProps('Projects', '', 'fas fa-folder-open', 'pink-text text-lighten-4'),
    new NavBarProps('Contact', '', 'fas fa-envelope', 'blue-text text-lighten-2'),
  ];
}
