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
  video?: Video;

  id_video! : number

  channel?: Channel = undefined;

  comments: Comment[] = [];

  autor_comentario : string = ""
  autor_email : string = ""
  post_comment_body : string = ""

  public enviarComentario() {
    console.log(this.autor_comentario, this.autor_email, this.post_comment_body);
    this.upload.postComment(this.id_video, this.autor_comentario, this.autor_email, this.post_comment_body);
  }

  constructor(
    private upload: UploadService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.id_video = parseInt(this.route.snapshot.params['id_video']);
    this.upload.getVideoPlayer(this.id_video).subscribe(videos => {
      let video = videos[0];
      console.log(this.video);

      this.upload.getChannels(parseInt(video.channel)).subscribe(channel => {
        this.channel = channel[0];
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
          console.log(c.name);
          
        })
        console.log(comment);
        console.log('estou comentando aqui');

      })

      //************ Substitui a propriedade url_video, Tags *********** */
      video.url_video = video.url_video.replace("watch?v=", "embed/");
      video.tags = video.tags.replaceAll(",", " #");
      console.log(video.tags)
      console.log(video.url_video)

      //************ transforma minha url em URLSAFE  ************* */

      video.url = this.sanitizer.bypassSecurityTrustResourceUrl(video.url_video);

      this.video = video;
    })
  }
}
