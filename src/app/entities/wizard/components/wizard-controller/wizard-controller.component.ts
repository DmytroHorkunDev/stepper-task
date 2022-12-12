import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wizard-controller',
  templateUrl: './wizard-controller.component.html',
  styleUrls: ['./wizard-controller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardControllerComponent {
  @Input() isPrevButtonDisabled = false;
  @Input() isNextButtonDisabled = false;

  @Output() onClickNext: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClickBack: EventEmitter<void> = new EventEmitter<void>();
}
