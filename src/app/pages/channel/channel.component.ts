import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Channel } from 'src/app/services/upload.model';
import { Video } from 'src/app/services/upload.model';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

    channels: Channel[] = [];

    videos: Video[] = [];
    @Input() field_media_image!: string;
    @Input() author = '';


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
