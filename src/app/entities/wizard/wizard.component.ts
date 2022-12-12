import { Component } from '@angular/core';

import { IWizardStep } from './components/wizard-steps/interfaces/wizard-step.interface';
import { MOCK_STEPS } from './data/steps.data';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent {
  public readonly steps: IWizardStep[] = MOCK_STEPS
  public activeStepIndex: number = 1;
}
