import { Component, input, OnInit, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  closeClick = output();
  hasFooter = input<boolean>(false);
  modalTitle = input<string>('Modal Titles');
  hideModal: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.hideModal = false;
    });
  }

  onCloseClick() {
    this.hideModal = true;
    setTimeout(() => {
      this.closeClick.emit()
    }, 400);
  }
}
