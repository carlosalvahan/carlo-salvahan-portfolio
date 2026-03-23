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
  starFilled: number = 0;
  starUnfilled: number = 5;


  onSkillSelect(skillName: string) {
    this.selectedSkill = this.skillSet.find(skill => skill.name === skillName);
  }

  createStarDisplay(mastery: number) {
    this.selectedSkill.mastery
  }

  isHalfStep(num: number) {
    return num % 1 === 0.5;
  }

  getArray(count: number): number[] {
    return Array(Math.floor(count)).fill(0);
  }
}
