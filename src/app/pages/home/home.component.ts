import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';
import { faHomeUser } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];


  faHomeUser = faHomeUser;
  faBookmark = faBookmark;
  faShareSquare = faShareSquare;


  constructor(private upload: UploadService) { }

  ngOnInit(): void {
    this.upload.getVideos().subscribe(video => {
      this.videos = video;
    })
  }
}
