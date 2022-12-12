import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wizard-controller',
  templateUrl: './wizard-controller.component.html',
  styleUrls: ['./wizard-controller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardControllerComponent {
  @Output() onClickNext: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClickBack: EventEmitter<void> = new EventEmitter<void>();
}
