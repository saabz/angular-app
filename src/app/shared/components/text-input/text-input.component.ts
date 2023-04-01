import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'shared-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
  @Input() textInputId = '';
  @Input() textInputControl = new FormControl();
  @Input() textInputLabel = '';

  errorMessages: Record<string, string> = {
    required: 'This field cannot be blank',
    email: 'This email is invalid',
  };

  constructor() {}
}
