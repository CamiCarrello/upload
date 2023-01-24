import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute } from '@angular/router';
import { Channel } from 'src/app/services/upload.model';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  channelList: Channel[] = [];
  channel: Channel = {} as Channel;

  constructor(private upload: UploadService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.upload.getChannelsList().subscribe(channel => {
      this.channelList = channel;
      console.log(this.channelList);
    })
  }
}
