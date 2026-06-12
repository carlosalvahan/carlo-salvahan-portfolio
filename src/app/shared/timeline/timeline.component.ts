import { Component, input, output, effect, signal, OnInit } from '@angular/core';
import { TimelineProps } from '../../props/timeline-props';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit{
  timelineItems = input<TimelineProps[]>([]);
  timelineSelected = output<TimelineProps>();
  localTimelineItems = signal<TimelineProps[]>([]);

  ngOnInit(): void {
    this.localTimelineItems.set(this.timelineItems());
  }


  onTimelineSelected(timelineItem: TimelineProps) {
    const newTimelineItems = this.timelineItems().map(item => {
        return {...item, selected: item.title === timelineItem.title};
    });
    this.localTimelineItems.set(newTimelineItems);
    this.timelineSelected.emit(timelineItem);
  }
}
