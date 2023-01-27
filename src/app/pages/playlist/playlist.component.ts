import { Playlist } from 'src/app/services/upload.model';
import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  playlist: Playlist[] = [];
  playlist_name: string[] = [];

  constructor(private upload: UploadService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.upload.getPlaylist().subscribe(playlist => {
      this.playlist = playlist
      this.playlist.forEach((play: any) => {
        //por playlist
        if (!this.playlist_name.includes(play.title)) {
          this.playlist_name.push(play.title)
        }
      });
      console.log(this.playlist_name)
    })
  }

  getTitle(title: string) {
    return this.playlist.filter((t: any) => t.title === title);
  }

  navigateToVideo(playlist: Playlist) {

    console.log("clicked here", playlist);
    this.upload.getPlaylistVideo(playlist.id).subscribe(videos => {
      const matchingVideo = videos.find(video => video.url_video === playlist.url_video) // estou comparando as url's para achar o match!
      if (matchingVideo) {

        console.log("matching video!", matchingVideo); //porque achamos o match, podemos usar o metodo (do Angular) para navegar ate a url que queremos!
        this.upload.getVideoPlayer(parseInt(matchingVideo.id_video)).subscribe(video =>{
          this.router.navigateByUrl("video/" + video[0].path.split('/').reverse()[0])//aqui navegamos para a URL!
        });


      }

      //está salvando o video clicado (selecionado)
    })
  }
}
