import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  closeClick = output();
  hasFooter = input<boolean>(false);
  modalTitle = input<string>('Modal Titles');

  onCloseClick() {
    this.closeClick.emit()
  }
}
