import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Channel, Video, Comment } from 'src/app/services/upload.model';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ParseSourceFile } from '@angular/compiler';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videos: Video[] = [];
  video: Video = {} as Video;

  channels: Channel[] = [];
  channel: Channel = {} as Channel;

  comments: Comment[] = [];

  /* comment: Comment = {} as Comment; */
  /* comment: Comment[] = []; */

  video_ready: boolean = false;

  constructor(
    private upload: UploadService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this.upload.getVideos().subscribe(video => {
      this.videos = video;
      console.log(video)
    })

    let id_video = this.route.snapshot.params['id_video'];
    this.upload.getVideoPlayer(id_video).subscribe(video => {
      this.videos = <Video[]>video;
      this.video = this.videos[0];
      //mudei essa parte do código para poder mostra que "video" só tem uma posição pois o video recebe um video por vez!
      console.log(video);

      this.upload.getChannels(parseInt(this.video.channel)).subscribe(channel => {
        this.channels = <Channel[]>channel;
        this.channel = this.channels[0];
      })

      this.upload.getVideoComment(parseInt(id_video)).subscribe(comment => {
        this.comments = <Comment[]>comment;
        this.comments.forEach(comment => {
          comment.name = comment.name.replaceAll('', "Anonymous")
          console.log(comment.name);
        })
        /*  this.video.comment.toString= this.comments;; */
        /* this.comment = this.comments; */
        console.log(comment);
        console.log('estou comentando aqui');
      })

      //************ Substitui a propriedade url_video, Tags *********** */
      this.videos.forEach(vid => {
        vid.url_video = vid.url_video.replace("watch?v=", "embed/");
        vid.tags = vid.tags.replaceAll(",", " #");
        console.log(vid.tags)
        console.log(vid.url_video)

        /*Para obter dados de date e converter*/
        let current_data: Date = new Date();
        let date2 = new Date(vid.created)
        var Difference_In_Time = current_data.getTime() - date2.getTime();
        let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
        this.video.created = Difference_In_Days.toString();
        console.log(Difference_In_Days);
      });

      //************ transforma minha url em URLSAFE  ************* */
      this.videos.forEach(v => {
        //com a mudanção de videos para video o novo array tem só uma posição, precisei refazer o sanitizer:
        this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(v.url_video);
      });
      
      this.video_ready = true;
    })
  }
}
