import { Component, OnInit, Input } from '@angular/core';
import { Tag } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';
import { faHomeUser, faBarsStaggered, faPlay, faClapperboard, faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

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
  }

}
