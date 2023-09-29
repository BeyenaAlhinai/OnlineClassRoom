import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendComponent } from './attend.component';

describe('AttendComponent', () => {
  let component: AttendComponent;
  let fixture: ComponentFixture<AttendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendComponent]
    });
    fixture = TestBed.createComponent(AttendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
