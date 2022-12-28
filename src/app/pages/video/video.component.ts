import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Channel } from 'src/app/services/upload.model';
import { Video } from 'src/app/services/upload.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videos: Video[] = [];

  channels: Channel[] = [];

  @Input() thumbnail = '';

  constructor(private upload: UploadService) { }

  ngOnInit(): void {
    this.upload.getChannels().subscribe(channel => {
      this.channels = channel;
  })
  this.upload.getVideos().subscribe(video => {
      this.videos = video;
})
  }

}
