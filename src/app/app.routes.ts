import { Routes } from '@angular/router';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', component: IntroductionComponent }, // Default route
    { path: 'experience', component: ExperiencePageComponent }, 
    { path: 'skills', component: SkillsPageComponent }, 
    { path: 'projects', component: ProjectsPageComponent }, 
    { path: 'contact', component: ContactPageComponent }, 
];
