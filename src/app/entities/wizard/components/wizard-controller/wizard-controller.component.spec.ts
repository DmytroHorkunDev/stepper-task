import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardControllerComponent } from './wizard-controller.component';

describe('WizardControllerComponent', () => {
  let component: WizardControllerComponent;
  let fixture: ComponentFixture<WizardControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
