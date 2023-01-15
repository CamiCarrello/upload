import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Video, Channel } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';
import {faBookmark as faBookmarkSolid,faHomeUser, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faBookmark} from '@fortawesome/free-regular-svg-icons';



=======
>>>>>>> main

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  videos: Video[] = [];
  channelList: Channel[] = [];

  faHomeUser = faHomeUser;
  faBookmark = faBookmark;
  faBookmarkSolid = faBookmarkSolid;
  faShareNodes = faShareNodes;


  constructor(private upload: UploadService) { }

  ngOnInit(): void {
    this.upload.getVideos().subscribe(video => {
      this.videos = video;
})

  this.upload.getChannelsList().subscribe(channel => {
    this.channelList = channel;
  })




}

}


=======
  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> main
