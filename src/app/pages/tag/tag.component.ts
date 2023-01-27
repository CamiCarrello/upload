import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  videos: Video[] = [];
  isReady: boolean = false;

  constructor(private route: ActivatedRoute, private upload: UploadService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id_tag = params['id'];
      console.log('Esta é minha tag:' + id_tag);

      this.upload
        .getTagVideo(id_tag)
        .subscribe((videos) => (this.videos = videos));
    });
    this.isReady = true;
  }
}
