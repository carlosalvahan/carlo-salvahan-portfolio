import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-contact-page',
  imports: [ScrollAnimateDirective],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  redirectTo() {
    window.location.href = 'https://www.linkedin.com/in/carlo-salvahan-131a67148';
  }
}
