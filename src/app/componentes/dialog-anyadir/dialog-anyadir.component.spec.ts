import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnyadirComponent } from './dialog-anyadir.component';

describe('DialogAnyadirComponent', () => {
  let component: DialogAnyadirComponent;
  let fixture: ComponentFixture<DialogAnyadirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAnyadirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnyadirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
