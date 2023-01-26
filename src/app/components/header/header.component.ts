import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;

  showModal: Boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  constructor() { }

  ngOnInit(): void { 
    

  }
}
