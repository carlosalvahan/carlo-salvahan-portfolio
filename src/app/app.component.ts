import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImageComponent } from './shared/image/image.component';
import { NavBarProps } from './props/nav-bar-props';
import { ModalComponent } from './shared/modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carlo-salvahan-portfolio';

  navBarItems = [
    new NavBarProps('Home', '/', 'fas fa-home', 'white-text'),
    new NavBarProps('Experience', '/experience', 'fas fa-briefcase', 'yellow-text text-lighten-2'),
    new NavBarProps('Skills', '/skills', 'fas fa-code', 'orange-text text-accent-1'),
    new NavBarProps('Projects', '/projects', 'fas fa-folder-open', 'pink-text text-lighten-4'),
    new NavBarProps('Contact', '/contact', 'fas fa-envelope', 'blue-text text-lighten-2'),
  ];
}
