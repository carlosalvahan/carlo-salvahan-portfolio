import { Component, effect, input } from '@angular/core';
import { SkillsConstants } from '../../../constants/skills.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  selectedProject: any = input<any>(null);
  skillList: any[] = [];
  activeGrid: string = 'description';

  constructor() {
    effect(() => {
      this.skillList = this.selectedProject()?.skills?.map((skill: string) => {
        return {
          ...SkillsConstants[skill as keyof typeof SkillsConstants], name: skill
        }
      });
    });
  }


}
