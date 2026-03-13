import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  imageSrc = input<string>('kaneki.png');
  imageText = input<string>('This is image text');
  imageSubText = input<string>('This is image subtext');
}
