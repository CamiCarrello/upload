import { Component, Input, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Video, VideoCard } from 'src/app/services/upload.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-cards',
  templateUrl: './video-cards.component.html',
  styleUrls: ['./video-cards.component.scss']
})
export class VideoCardsComponent implements OnInit {
  videos: Video[] = [];

  video_card: VideoCard[] = [];


  constructor(private upload: UploadService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('teste do videos')
    console.log(this.videos)
    


    let id_video = this.route.snapshot.params['id_video'];
    this.upload.getVideoPlayer(id_video).subscribe(video => {
      this.videos = <Video[]>video;
      let vid = this.videos[0];
      console.log(vid);

      this.upload.getVideoCards(parseInt(vid.channel)).subscribe(videos => {
        this.video_card = videos;
        console.log(videos);
        console.log('testando o console log de channel');

      });
    })
  }

}
