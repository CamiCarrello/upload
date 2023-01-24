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

  autor_comentario: string = ""
  autor_email: string = ""
  post_comment_body: string = ""

  comments: Comment[] = [];

  constructor(private upload: UploadService, private route: ActivatedRoute, private router: Router, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let id_channel = this.route.snapshot.params['id_channel']
    this.upload.getChannels(parseInt(id_channel)).subscribe(channel => {
      this.channels = <Channel[]>channel;
      this.channel = this.channels[0];

      /* UTILIZADO SOMENTE PARA CHAMAR AS TAGS E inserir as "#"! */
      this.upload.getChannelVideos(parseInt(id_channel)).subscribe(channel => {
        this.channels = <Channel[]>channel;

        this.channels.forEach(video => {
          video.tags = video.tags.replaceAll(",", " #");
        });
      });

      this.upload.getCommentChannel(parseInt(id_channel)).subscribe(comment => {
        this.comments = <Comment[]>comment;
        this.comments.forEach(comment => {
          if (comment.name === "") {
            comment.name = comment.name.replaceAll('', "Anonymous")
            comment.user_photo = "../../../assets/imgs/anonymous.jpg";
          } else {
            comment.user_photo = "https://dev-project-upskill-grupo02.pantheonsite.io" + comment.user_photo;
          }
        })
      })

      // Transforma a url em URLSAFE
      this.videos.forEach(v => {
        //Com a mudança de videos para video, o novo array tem só uma posição,foi preciso refazer o sanitizer.
        this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(v.url_video);
      })
    })
  }

  public enviarComentario() {
    let id_channel = this.route.snapshot.params['id_channel']
    this.upload.postCommentChannel(id_channel, this.autor_comentario, this.autor_email, this.post_comment_body);
    console.log("TESTE", this.comments)
  }
}
