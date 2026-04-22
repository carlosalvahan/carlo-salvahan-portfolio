import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ProjectDetailsComponent } from '../projects-page/project-details/project-details.component';
import { ProjectConstants } from '../../constants/project.constants';
import { CompaniesConstants } from '../../constants/experience.constants';

@Component({
  selector: 'app-introduction',
  imports: [ScrollAnimateDirective, ModalComponent, ProjectDetailsComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  showModal: boolean = false;
  selectedProject: any;

  modalClose() {
    this.showModal = false;
  }

  openProject(projectName: string) {
    const projectItem = ProjectConstants[projectName as keyof typeof ProjectConstants];
    this.selectedProject = {
      ...projectItem,
      name: projectName,
      cmpImage: CompaniesConstants[projectItem.company as keyof typeof CompaniesConstants]?.imageUrl
    }
    this.showModal = true;
  }
}
