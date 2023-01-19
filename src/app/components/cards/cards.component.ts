import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Channel, Video, Themes } from 'src/app/services/upload.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  channelList: Channel[] = [];
  channel: Channel = {} as Channel;
  videos: Video[] = [];
  suggested_theme: Themes = {} as Themes;
  suggested_themes: Themes[] = [];

  constructor(private upload: UploadService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.upload.getThemes().subscribe((theme) => {
      this.suggested_themes = <Themes[]>theme;
      this.suggested_theme = this.suggested_themes[0];
    });

    this.upload.getChannelsList().subscribe((channel) => {
      this.channelList = <Channel[]>channel;
      this.channel = this.channelList[3];
    });

    this.upload.getVideos().subscribe((video) => {
      this.videos = video;
    });
  }
}
