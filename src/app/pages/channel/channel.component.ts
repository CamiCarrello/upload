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

  channels: Channel[] = [];
  channel: Channel = {} as Channel;

  videos: Video[] = [];
  video: Video = {} as Video;

  constructor(private upload: UploadService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id_channel = this.route.snapshot.params['id_channel']
    this.upload.getChannels(id_channel).subscribe(channel => {
      this.channels = <Channel[]>channel;
      this.channel = this.channels[0];
      console.log(id_channel)
    })

    /* let id_video = this.route.snapshot.params['id_video']
    this.upload.getVideos().subscribe(video => {
      this.videos = video;
      this.video = this.videos[0];
    }) */
  }
}