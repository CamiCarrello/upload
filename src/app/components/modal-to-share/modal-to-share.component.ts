import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-to-share',
  templateUrl: './modal-to-share.component.html',
  styleUrls: ['./modal-to-share.component.scss'],
})
export class ModalToShareComponent implements OnInit {
  @Input() showModal: Boolean = true;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  @Input() image: string = '';
  @Input() name: string = '';
  @Input() hashtags: string = '';
  @Input() url: string = '';
  @Input() fbid: string = '';
  target = '_blank';
  params = 'width=600,height=400,left=100,top=100';

  twitter() {
    window.open('http://twitter.com/intent/tweet?url=' + this.url, this.target, this.params);
  }

  facebook() {
    window.open('https://facebook.com/sharer/sharer.php?u=' + this.url, this.target, this.params);
  }

  pinterest() {
    window.open('http://pinterest.com/pin-builder/?url=' + this.url, this.target, this.params);
  }

  whatsApp() {
    window.open('http://api.whatsapp.com/send/?text=' + this.url, this.target, this.params);
  }

  

  constructor() {}

  ngOnInit(): void {}
}
