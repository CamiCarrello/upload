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

  id_channel!: number;
  channels: Channel[] = [];
  channel: Channel = {} as Channel;

  videos: Video[] = [];
  video: Video = {} as Video;

  autor_comentario: string = ""
  autor_email: string = ""
  post_comment_body: string = ""

  comments: Comment[] = [];

  anonymous: string = "[0]"

  constructor(private upload: UploadService, private route: ActivatedRoute, private router: Router, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id_channel = params['id_channel'];

      this.upload.getChannels(this.id_channel).subscribe(channel => {
        this.channels = <Channel[]>channel;
        this.channel = this.channels[0];

        /* UTILIZADO SOMENTE PARA CHAMAR AS TAGS E inserir as "#"! */
        this.upload.getChannelVideos(this.id_channel).subscribe(channel => {
          this.channels = <Channel[]>channel;

          this.channels.forEach(video => {
            video.tags = video.tags.replaceAll(",", " #").slice(-34);
            /* console.log(video.tags.indexOf("#")) 
            - Para descobrir até onde poderia retirar caracteres sem "sumir" tags ao meio */
          })
        });

        this.upload.getCommentChannel(this.id_channel).subscribe(comment => {
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
    })
  }
  public enviarComentario() {
    this.upload.postCommentChannel(this.id_channel, this.autor_comentario, this.autor_email, this.post_comment_body, () => {
      /* console.log('teste para ver o que vem nos dados: ' + this.id_channel, this.autor_comentario, this.autor_email, this.post_comment_body); */

      this.comments.splice(0, 0, {
        name: this.autor_comentario,
        email: this.autor_email,
        comment: this.post_comment_body,
        post_date: new Date().toISOString().split("T")[0],
        user_photo: "../../../assets/imgs/anonymous.jpg"
      })
    })
  }
}
