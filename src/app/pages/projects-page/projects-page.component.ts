import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectConstants } from '../../constants/project.constants';
import { SkillsConstants } from '../../constants/skills.constants';

@Component({
  selector: 'app-projects-page',
  imports: [CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPageComponent {
  readonly projectList = Object.keys(ProjectConstants).map(project => {
    return {
      ...ProjectConstants[project as keyof typeof ProjectConstants], name: project
    }
  }).map(projectWithSkill => {
    return {
      ...projectWithSkill, 
      projectSkillDetail: projectWithSkill.skills.slice(0, 4).map(skill => {
        return {
          ...SkillsConstants[skill as keyof typeof SkillsConstants], name: skill
        }
      }),
      skillDiff: projectWithSkill.skills.length - 4
    }
  });


  constructor() {
    console.log(this.projectList);
  }

}
