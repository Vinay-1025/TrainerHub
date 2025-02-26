import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutimagecardComponent } from './aboutimagecard.component';

describe('AboutimagecardComponent', () => {
  let component: AboutimagecardComponent;
  let fixture: ComponentFixture<AboutimagecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutimagecardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutimagecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
