import { Component, input, output } from '@angular/core';
import { TimelineProps } from '../../../props/timeline-props';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-detail-page',
  imports: [CommonModule],
  templateUrl: './experience-detail-page.component.html',
  styleUrl: './experience-detail-page.component.scss'
})
export class ExperienceDetailPageComponent {
  detailItem = input<TimelineProps>();
  backClick = output<void>();
}
