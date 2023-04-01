import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonLabel = '';
  @Output() onButtonClick = new EventEmitter<void>();

  public buttonClickAction(event: any): void {
    event.preventDefault();
    this.onButtonClick.emit();
  }
}
