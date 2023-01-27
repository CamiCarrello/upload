import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute } from '@angular/router';
import { Channel, Video } from 'src/app/services/upload.model';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  channels: Channel[] = [];

  videos: Video[] = [];
  video: Video = {} as Video;

  faCommentAlt = faCommentAlt;
  faCamera = faCamera;

  constructor(private upload: UploadService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.upload.getChannelsList().subscribe(channel => {
      this.channels = channel;

      this.channels.forEach(channel => {
        if (parseInt(channel.comment_count) > 1) {
          channel.comment_count = channel.comment_count.replace('', "Comentários: ")
        } else {
          channel.comment_count = channel.comment_count.replace('', "Comentário: ")
        }

        if (parseInt(channel.id_video) > 1) {
          channel.id_video = channel.id.replace('', "Vídeos: ")
        } else {
          channel.id_video = channel.id.replace('', "Vídeo: ")
        }
      })
    })
  }
}