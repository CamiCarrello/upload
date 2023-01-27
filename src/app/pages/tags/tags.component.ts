import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagComponent implements OnInit {
  videos: Video[] = [];
  isReady: boolean = false;

  constructor(private route: ActivatedRoute, private upload: UploadService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id_tag = params['id'];
      console.log('Esta é minha tag:' + id_tag);

      this.upload.getTagVideo(id_tag).subscribe((videos) =>
        (this.videos = [videos[Math.floor(Math.random() * videos.length)]])
      )
    })
    this.isReady = true;
  }

  public navigateToVideo(video: Video) {
    this.upload.getVideoPlayer(parseInt(video.id)).subscribe((video) => {
      this.router.navigateByUrl('/video/' + video[0].path.split('/').reverse()[0]
      )
    })
  }
}
