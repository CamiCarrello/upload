import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Channel, Video, Comment } from 'src/app/services/upload.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  /* video?: Video; */

  /* channel?: Channel = undefined; */

  id_video!: number
  videos: Video[] = [];
  video: Video = {} as Video;

  channels: Channel[] = [];
  channel: Channel = {} as Channel;

  comments: Comment[] = [];

  video_ready: boolean = false;

  autor_comentario: string = ""
  autor_email: string = ""
  post_comment_body: string = ""

  

  constructor(
    private upload: UploadService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.id_video = this.route.snapshot.params['id_video'];
    this.upload.getVideoPlayer(this.id_video).subscribe(video => {
      this.videos = <Video[]>video;
      this.video = this.videos[0];

      console.log(video);

      this.upload.getChannels(parseInt(this.video.channel)).subscribe(channel => {
        this.channels = <Channel[]>channel;
        this.channel = this.channels[0];
        console.log(channel)
      })

      this.upload.getVideoComment(this.id_video).subscribe(comment => {
        this.comments = <Comment[]>comment;
        this.comments.forEach(c => {
          if (c.name === "") {
            c.name = c.name.replaceAll('', "Anonymous")
            c.user_photo = "../../../assets/imgs/anonymous.jpg";
          } else {
            c.user_photo = "https://dev-project-upskill-grupo02.pantheonsite.io" + c.user_photo;
          }
        })

        console.log(comment);
        console.log('estou comentando aqui');
      })

      //************ Substitui a propriedade url_video, Tags *********** */

      this.video.url_video = this.video.url_video.replace("watch?v=", "embed/");
      this.video.tags = this.video.tags.replaceAll(",", " #");
      console.log(this.video.tags)
      console.log(this.video.url_video)



      //************ transforma minha url em URLSAFE  ************* */
      this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url_video);

      this.video_ready = true;

    })


  }
  public enviarComentario() {
    console.log(this.autor_comentario, this.autor_email, this.post_comment_body);
    this.upload.postComment(this.id_video, this.autor_comentario, this.autor_email, this.post_comment_body);
  }
}
