import { Component, input, output } from '@angular/core';
import { TimelineProps } from '../../props/timeline-props';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  timelineItems = input<TimelineProps[]>([]);
  viewDetailsClick = output<TimelineProps>();

  onViewDetails(title: TimelineProps) {
    this.viewDetailsClick.emit(title);
  }
}
