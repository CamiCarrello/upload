import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Channel } from 'src/app/services/upload.model';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  channelList: Channel[] = [];

  constructor(private upload: UploadService) { }

  ngOnInit(): void {
    this.upload.getChannelsList().subscribe(channel => {
      this.channelList = channel;
    })
  }
}
