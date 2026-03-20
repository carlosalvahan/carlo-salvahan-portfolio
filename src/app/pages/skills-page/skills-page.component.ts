import { Component } from '@angular/core';
import { SkillsConstants } from '../../constants/skills.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-page',
  imports: [CommonModule],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.scss'
})
export class SkillsPageComponent {
  readonly skillSet = Object.keys(SkillsConstants).map(skill => {
    return {
      ...SkillsConstants[skill as keyof typeof SkillsConstants], name: skill
    }
  });
  selectedSkill: any = this.skillSet[0];

  onSkillSelect(skillName: string) {
    this.selectedSkill = this.skillSet.find(skill => skill.name === skillName);
    console.log(this.selectedSkill);
  }
}
