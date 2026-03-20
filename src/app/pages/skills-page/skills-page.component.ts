import { Component, OnInit } from '@angular/core';
import { SkillsConstants } from '../../constants/skills.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-page',
  imports: [CommonModule],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.scss'
})
export class SkillsPageComponent implements OnInit {
  readonly skillSet = Object.keys(SkillsConstants).map(skill => {
    return {
      ...SkillsConstants[skill as keyof typeof SkillsConstants], name: skill
    }
  });
  

  ngOnInit(): void {
    console.log(this.skillSet);
  }
}
