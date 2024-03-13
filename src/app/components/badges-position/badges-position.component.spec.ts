import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesPositionComponent } from './badges-position.component';

describe('BadgesPositionComponent', () => {
  let component: BadgesPositionComponent;
  let fixture: ComponentFixture<BadgesPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgesPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BadgesPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
