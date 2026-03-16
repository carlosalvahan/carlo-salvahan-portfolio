import { Component, input } from '@angular/core';
import { TimelineProps } from '../../props/timeline-props';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  timelineItems = input<TimelineProps[]>([])
}
