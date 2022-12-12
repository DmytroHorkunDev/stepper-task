import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IWizardStep } from './interfaces/wizard-step.interface';

@Component({
  selector: 'app-wizard-steps',
  templateUrl: './wizard-steps.component.html',
  styleUrls: ['./wizard-steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardStepsComponent {
  @Input() steps!: IWizardStep[];
  @Input() activeStepIndex!: number;
}
