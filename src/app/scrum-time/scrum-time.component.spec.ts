import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumTimeComponent } from './scrum-time.component';

describe('ScrumTimeComponent', () => {
  let component: ScrumTimeComponent;
  let fixture: ComponentFixture<ScrumTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrumTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
