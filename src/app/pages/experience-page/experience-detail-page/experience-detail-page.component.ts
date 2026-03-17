import { Component, effect, input, output } from '@angular/core';
import { TimelineProps } from '../../../props/timeline-props';
import { CommonModule } from '@angular/common';
import { ExperienceDetailsConstants, ExperienceSkillsConstants } from '../../../constants/experience.constants';
import { SkillsConstants } from '../../../constants/skills.constants';

@Component({
  selector: 'app-experience-detail-page',
  imports: [CommonModule],
  templateUrl: './experience-detail-page.component.html',
  styleUrl: './experience-detail-page.component.scss'
})
export class ExperienceDetailPageComponent {
  detailItem = input<TimelineProps>();
  backClick = output<void>();
  companies: any[] = [];
  yearSkills: any[] = [];
  skills: any[] = [];

  constructor() {
    effect(() => {
      let detail = this.detailItem();
      const key = detail?.title as keyof typeof ExperienceDetailsConstants;
      this.yearSkills = ExperienceSkillsConstants[key];
      this.skills = this.yearSkills.map(skill => {
        return { ...SkillsConstants[skill as keyof typeof SkillsConstants], name: skill };
      });
      this.companies = Object.entries(ExperienceDetailsConstants[key]);
      console.log(this.companies);
    });
  }
}
