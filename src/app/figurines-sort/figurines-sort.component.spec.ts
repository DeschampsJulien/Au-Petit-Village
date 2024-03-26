import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurinesSortComponent } from './figurines-sort.component';

describe('FigurinesSortComponent', () => {
  let component: FigurinesSortComponent;
  let fixture: ComponentFixture<FigurinesSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigurinesSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FigurinesSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
