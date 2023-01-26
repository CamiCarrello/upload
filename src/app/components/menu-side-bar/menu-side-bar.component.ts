import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';
import { faHomeUser, faBarsStaggered, faPlay, faClapperboard, faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
  styleUrls: ['./menu-side-bar.component.scss']
})
export class MenuSideBarComponent implements OnInit {

  @Input() showModalSideBar: Boolean = true;

  toggleModal() {
    this.showModalSideBar = !this.showModalSideBar;
  }

  tags: Tag[] = [];
  
  faHomeUser = faHomeUser;
  faBarsStaggered = faBarsStaggered;
  faClapperboard = faClapperboard;
  faPlay = faPlay;
  faBookmark = faBookmark;

  constructor(private upload: UploadService) {
    this.upload.getTags().subscribe(tag => {
      this.tags = tag.splice(0, 10);
    })
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }
}
