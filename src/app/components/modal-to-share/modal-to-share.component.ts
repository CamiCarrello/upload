import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-to-share',
  templateUrl: './modal-to-share.component.html',
  styleUrls: ['./modal-to-share.component.scss']
})
export class ModalToShareComponent implements OnInit {

  @Input() showModal : Boolean = true;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  constructor() { }

  ngOnInit(): void {


  }

}
