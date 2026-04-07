import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectConstants } from '../../constants/project.constants';
import { SkillsConstants } from '../../constants/skills.constants';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CompaniesConstants } from '../../constants/experience.constants';

@Component({
  selector: 'app-projects-page',
  imports: [CommonModule, ModalComponent, ProjectDetailsComponent],
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
      skillDiff: projectWithSkill.skills.length - 4,
      cmpImage: CompaniesConstants[projectWithSkill.company as keyof typeof CompaniesConstants]?.imageUrl
    }
  });

  showModal: boolean = false;
  selectedProject: any = null;


  openProjectDetails(project: any) {
    this.selectedProject = project;
    this.showModal = true;
  }

  modalClose() {
    this.showModal = false;
  }

}
