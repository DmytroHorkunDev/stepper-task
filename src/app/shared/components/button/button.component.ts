import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { EButtonSize } from './enums/button-size.enum';
import { EButtonStyle } from './enums/button-style.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  public buttonSizes = EButtonSize;

  @Input() content!: string;
  @Input() type: 'submit' | 'text' = 'text';
  @Input() isDisabledButton!: boolean;
  @Input() isUppercase: boolean = true;
  @Input() buttonStyle: EButtonStyle = EButtonStyle.Teal;
  @Input() buttonSize: EButtonSize = EButtonSize.Medium;

  @Output() onClickButton: EventEmitter<void> = new EventEmitter<void>();

  public onClickBtn(): void {
    if (!this.isDisabledButton) {
      this.onClickButton.emit();
    }
  }
}
