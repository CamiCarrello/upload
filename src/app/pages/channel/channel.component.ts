import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Channel } from 'src/app/services/upload.model';
import { Video } from 'src/app/services/upload.model';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  channels: Channel [] = [];

  videos: Video [] = [];  

  constructor(private upload: UploadService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // let id_channel = this.route.snapshot.params['id_channel'];
     this.upload.getChannels(/*id_channel*/).subscribe(channel => {
        this.channels = channel;
        console.log(channel)
    })

    this.upload.getVideos().subscribe(video => {
        this.videos = video;
        console.log(video)
    })
  }
}
