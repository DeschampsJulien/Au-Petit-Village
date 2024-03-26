import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundHomeComponent } from './background-home.component';

describe('BackgroundHomeComponent', () => {
  let component: BackgroundHomeComponent;
  let fixture: ComponentFixture<BackgroundHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgroundHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
