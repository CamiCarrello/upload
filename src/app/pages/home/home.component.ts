import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos: Video[] = [];

  constructor(private upload: UploadService) { }

  ngOnInit(): void {
    this.upload.getVideos().subscribe(video => {
      this.videos = video;
    })
  }
}