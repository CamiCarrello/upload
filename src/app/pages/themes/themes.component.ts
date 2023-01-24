import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Video } from 'src/app/services/upload.model';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})

export class ThemesComponent implements OnInit {

  constructor(private upload: UploadService, private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  videos: Video[] = [];
  video: Video = {} as Video;

  video_ready: boolean = false;

  ngOnInit(): void {

    this.upload.getVideos().subscribe(video => {
      this.videos = video;

      /* Substitui a propriedade (url_video) */
      this.videos.forEach(vid => {
        vid.url_video = vid.url_video.replace("watch?v=", "embed/");
        vid.url_video += "?autoplay=1&muted"
        vid.url = this.sanitizer.bypassSecurityTrustResourceUrl(vid.url_video);
      })
      this.video_ready = true;
    })
  }
}



/*     let array = [];
    array = ["../../../assets/imgs/bart-simpson.jpg", "../../../assets/imgs/dino.jpg", "../../../assets/imgs/manpixel.png", "../../../assets/imgs/chicletinho.png", "../../../assets/imgs/batman.png"];
 
    array.sort(() => 0.5 - Math.random());
    console.log('AVATAR: ' + array[0]);
 */