import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  @Input() passwordInputId = '';
  @Input() passwordInputControl = new FormControl();
  @Input() passwordInputLabel = '';

  errorMessages: Record<string, string> = {
    required: 'This field cannot be blank',
  };
}
