import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Video, Like } from 'src/app/services/upload.model';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})

export class ThemesComponent implements OnInit {

  constructor(private upload: UploadService, private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  videos: Video[] = [];
  video: string[] = [];

  video_ready: boolean = false;
  ngOnInit(): void {

    this.upload.getVideos().subscribe(videos => {
      this.videos = videos.slice(2);

      this.videos.forEach((video: any) => {
        /* Devolve a lista de vídeos por Categoria. */
        if (!this.video.includes(video.category)) {
          this.video.push(video.category)
        }
      })

      /* Substitui a propriedade URL_VIDEO pel URL (SAFE) */
      this.videos.forEach(vid => {
        vid.url_video = vid.url_video.replace("watch?v=", "embed/");
        vid.url_video += "?autoplay=1&muted" /* Desativada para não sobrecarregar a página! */
        vid.url = this.sanitizer.bypassSecurityTrustResourceUrl(vid.url_video);
        this.video_ready = true;
        /* console.log("HEY: " + vid.url) */  /* Devolve a lista da URL safe, porém não aceita nenhuma proprieda para devolver um número de elementos. */
      })
    })
  }

  getCategory(category: string) {
    return this.videos.filter((c: any) => c.category === category).slice(-2);
  }
}