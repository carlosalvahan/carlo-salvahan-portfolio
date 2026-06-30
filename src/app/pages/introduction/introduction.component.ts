import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ProjectDetailsComponent } from '../projects-page/project-details/project-details.component';
import { ProjectConstants } from '../../constants/project.constants';
import { CompaniesConstants } from '../../constants/experience.constants';
import { ContactPageComponent } from '../contact-page/contact-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-introduction',
  imports: [ScrollAnimateDirective, ModalComponent, ProjectDetailsComponent, ContactPageComponent, RouterModule],
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

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'CarloSalvahanCV.pdf';
    link.download = 'Carlo_Salvahan_CV.pdf';
    link.click();
  }
}
