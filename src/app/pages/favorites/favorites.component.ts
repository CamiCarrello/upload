import { UploadService } from 'src/app/services/upload.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/services/upload.model';
import {
  faBookmark as faBookmarkSolid,
  faHomeUser,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  videos: Video[] = [];
  list_favorites: any[] = [];
  favs: any[] = [];
  faHomeUser = faHomeUser;
  faBookmark = faBookmark;
  faBookmarkSolid = faBookmarkSolid;
  faShareNodes = faShareNodes;

  constructor(private upload: UploadService, private route: ActivatedRoute) {}

  toggleFavorite(id_video: string) {
    this.upload.toggleFavorite(id_video);
  }

  itsFavorite(id_video: string) {
    return this.upload.itsFavorite(id_video);
  }
  
  ngOnInit(): void {
    this.upload.getVideos().subscribe((video) => {
      this.videos = video;
      this.list_favorites = this.upload.getFavorites();
      this.favs = this.videos.filter(video => this.list_favorites.includes(video.id));
      console.log(this.favs);

      //pego e favorito e guardo na lista de favoritos.
    });
  }
}
