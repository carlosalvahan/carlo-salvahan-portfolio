import { Component } from '@angular/core';
import { TimelineComponent } from '../../shared/timeline/timeline.component';
import { TimelineProps } from '../../props/timeline-props';
import { ExperienceDescriptionConstants } from '../../constants/experience.constants';
import { CommonModule } from '@angular/common';
import { ExperienceDetailPageComponent } from './experience-detail-page/experience-detail-page.component';

@Component({
  selector: 'app-experience-page',
  imports: [TimelineComponent, CommonModule, ExperienceDetailPageComponent],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss'
})
export class ExperiencePageComponent {
  experienceItems = [
    new TimelineProps('fa-solid fa-graduation-cap', ExperienceDescriptionConstants[2016], '2016', '#64b5f6', true), // graduation
    new TimelineProps('fa-solid fa-plane', ExperienceDescriptionConstants[2018], '2018', '#f8bbd0'), // airplane
    new TimelineProps('fa-solid fa-briefcase', ExperienceDescriptionConstants[2020], '2020', '#ffd180 '), // briefcase
    new TimelineProps('fa-solid fa-file-invoice-dollar', ExperienceDescriptionConstants[2021], '2021', '#A2B973'), // file-invoice-dollar
    new TimelineProps('fa-solid fa-hand-holding-heart', ExperienceDescriptionConstants[2024], '2025', '#fff176'), // hand holding heart
  ];

  detailSelected: TimelineProps = this.experienceItems[0];

  onTimelineSelected($event: TimelineProps) {
      this.detailSelected = $event;
  }
}
