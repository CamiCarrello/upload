import { Component, Input, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Video, Channel } from 'src/app/services/upload.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-cards',
  templateUrl: './video-cards.component.html',
  styleUrls: ['./video-cards.component.scss']
})
export class VideoCardsComponent implements OnInit {
  videos: Video[] = [];

  @Input() id_channel!:string;

  constructor(private upload: UploadService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id_channel = parseInt(this.id_channel);
   
    this.upload.getChannelVideos(id_channel).subscribe(videos => {
      this.videos = videos;
      console.log(videos);
      console.log('testando o console log de channel');
    })
  }

  //como vou criar a ligação do id do channel ao video em execução

}
