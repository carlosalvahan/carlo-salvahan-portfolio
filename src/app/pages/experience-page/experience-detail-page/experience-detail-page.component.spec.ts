import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDetailPageComponent } from './experience-detail-page.component';

describe('ExperienceDetailPageComponent', () => {
  let component: ExperienceDetailPageComponent;
  let fixture: ComponentFixture<ExperienceDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
