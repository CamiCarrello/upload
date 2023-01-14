import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Channel, Video, Comment } from 'src/app/services/upload.model';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  channels: Channel[] = [];
  channel: Channel = {} as Channel;

  videos: Video[] = [];
  video: Video = {} as Video;

  comments: Comment[] = [];

  constructor(private upload: UploadService, private route: ActivatedRoute, private router: Router, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let id_channel = this.route.snapshot.params['id_channel']
    this.upload.getChannels(parseInt(id_channel)).subscribe(channel => {
      this.channels = <Channel[]>channel;
      this.channel = this.channels[0];

      this.upload.getChannelVideos(parseInt(id_channel)).subscribe(channel => {
        this.channels = <Channel[]>channel;
      });

      /* this.upload.getCommentChannel(parseInt(id_channel)).subscribe(comment => {
        this.comments = <Comment[]>comment;
        this.comments.forEach(comment => {
          if (comment.name === "") {
            comment.name = comment.name.replaceAll('', "Anonymous")
            comment.user_photo = "../../../assets/imgs/anonymous.jpg";
          } else {
            comment.user_photo = "https://dev-project-upskill-grupo02.pantheonsite.io" + comment.user_photo;
          }
          console.log(comment.name);
        })
        console.log(comment);
        console.log('estou comentando aqui');
      }) */

      //  Substitui a propriedade url_video, tags.
      this.videos.forEach(video => {
        video.url_video = video.url_video.replace("watch?v=", "embed/");
        video.tags = video.tags.replaceAll(",", " #");
        console.log(video.tags)
        console.log(video.url_video)
      });

      // Transforma a url em URLSAFE
      this.videos.forEach(v => {
        //Com a mudança de videos para video, o novo array tem só uma posição,foi preciso refazer o sanitizer.
        this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(v.url_video);
      })
    })
  }
}