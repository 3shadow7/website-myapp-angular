import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-form',
  standalone: true,
  imports: [],
  templateUrl: './popup-form.component.html',
  styleUrl: './popup-form.component.scss'
})
export class PopupFormComponent {


  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  formData = {
    name: '',
    email: ''
  };

  onSubmit() {
    this.submit.emit(this.formData);
    this.closePopup();
  }

  closePopup() {
    this.isVisible = false;
    this.close.emit();
  }

}
