import { Playlist, Video } from 'src/app/services/upload.model';
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  id_video!: number;
  video: Video[] = [];

  playlist: Playlist[] = [];
  playlist_name: string[] = [];


  constructor(private upload: UploadService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.upload.getPlaylist().subscribe(playlist => {
      this.playlist = playlist
      this.playlist.forEach((play: any) => {
        //por playlist
        if (!this.playlist_name.includes(play.title)) {
          this.playlist_name.push(play.title)
        }
      });

      this.upload.getVideos().subscribe((video) => {
        this.video = video;
      });
    })
  }

  getTitle(title: string) {
    return this.playlist.filter((t: any) => t.id === title);
  }

  fetchVideos(item: Playlist) {
    this.upload.getPlaylistVideo(item.id).subscribe()
  }
}
