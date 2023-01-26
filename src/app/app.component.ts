import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upload-app';

  showModal: Boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
