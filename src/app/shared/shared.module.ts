import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [TextInputComponent, PasswordInputComponent, ButtonComponent],
  exports: [TextInputComponent, PasswordInputComponent, ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {}
