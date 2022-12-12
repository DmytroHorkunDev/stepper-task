import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardStepComponent {
  @Input() step!: string;
  @Input() isActive: boolean = false;
}
