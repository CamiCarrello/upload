import { Component, Input, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Video, VideoCard, Channel } from 'src/app/services/upload.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-cards',
  templateUrl: './video-cards.component.html',
  styleUrls: ['./video-cards.component.scss']
})
export class VideoCardsComponent implements OnInit {
  videos: Video[] = [];
  video_card: VideoCard[] = [];

  channel: Channel[] = [];
  channel_name: string[] = [];

  @Input() id_video!: number;

  constructor(private upload: UploadService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      let id_video = this.id_video;
      //this upload get video player subscribe etc etc
      //this.route.snapshot.params['id_video'];
      this.upload.getVideoPlayer(id_video).subscribe(video => {
        this.videos = <Video[]>video;
        let vid = this.videos[0];
        /* console.log('O QUE ELE MOSTRA');
        console.log(vid.id); */

        this.upload.getVideoCards(parseInt(vid.channel)).subscribe(videos => {
          this.video_card = videos.slice(-2);
          /* console.log('testando o console log de video_card:');
          console.log(this.video_card); */
          /*
           */
        })
      })
    })
  }

  public navigateToVideo(videoCard: VideoCard) {
    this.upload.getVideoPlayer(parseInt(videoCard.id_video)).subscribe((video) => {
      this.router.navigateByUrl('/video/' + video[0].path.split('/').reverse()[0]
      )
    })
  }
}