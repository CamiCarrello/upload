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

  social(a: string | undefined) {
    let pinterest =
      'http://pinterest.com/pin/create/button/?url=' +
      this.url +
      '&media=' +
      this.image +
      '&description=' +
      this.name;
    let facebook =
      'https://facebook.com/dialog/share?app_id=' +
      this.fbid +
      'href=' +
      this.url +
      '&redirect_uri=' +
      this.url;
    let twitter =
      'http://twitter.com/share?text=' +
      this.name +
      '&url=' +
      this.url +
      '&hashtags=' +
      this.hashtags;

    let b = '';

    if (a === 'pinterest') {
      b = pinterest;
    }
    if (a === 'twitter') {
      b = twitter;
    }
    if (a === 'facebook') {
      b = facebook;
    }

    let params = `width=600,height=400,left=100,top=100`;

    window.open(b, a, params);
  }

  constructor() {}

  ngOnInit(): void {}
}
