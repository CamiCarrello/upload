import { Component, OnInit } from '@angular/core';
import { Video, Channel } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute } from '@angular/router';
import { faBookmark as faBookmarkSolid, faHomeUser, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];

  isReady: boolean = false;

  channelList: Channel[] = [];
  faHomeUser = faHomeUser;
  faBookmark = faBookmark;
  faBookmarkSolid = faBookmarkSolid;
  faShareNodes = faShareNodes;

  showModal: Boolean = false;
  modalUrl: string = '';

  toggleModal(url_video: string) {
    this.showModal = !this.showModal;
    this.modalUrl = encodeURIComponent(url_video);
  }

  getUser(video: Video) {
    return this.channelList.find(channel => channel.channel_name === video.channel)?.user_photo;
  }

  constructor(private route: ActivatedRoute, private upload: UploadService) { }

  toggleFavorite(id_video: string) {
    this.upload.toggleFavorite(id_video);
  }

  itsFavorite(id_video: string) {
    return this.upload.itsFavorite(id_video);
  }

  ngOnInit(): void {
    this.upload.getVideos().subscribe((video) => {
      this.videos = video.slice(-6); // apresenta os 6 ultimos videos
    });

    this.upload.getChannelsList().subscribe(channel => {
      this.channelList = channel;
    })
    this.isReady = true;
  }
}
