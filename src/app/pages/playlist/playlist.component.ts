import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/services/upload.model';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlist: Playlist[] = [];


  constructor( private upload: UploadService) { }

  ngOnInit(): void {
    this.upload.getPlaylist().subscribe(playlist => {
      this.playlist = playlist;

      console.log(this.playlist)

  })

}

}
