import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Channel, Video, Comment, Like, Dislike } from 'src/app/services/upload.model';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  id_video!: number


  videos: Video[] = [];
  video: Video = {} as Video;

  channels: Channel[] = [];
  channel: Channel = {} as Channel;

  comments: Comment[] = [];

  likes: Like[] = [];
  l: Like = {} as Like;
  dl: Dislike = {} as Dislike;
  dislike: Dislike[] = [];

  video_ready: boolean = false;

  autor_comentario: string = ""
  autor_email: string = ""
  post_comment_body: string = ""

  anonymous: string = "[0]"

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(
    private upload: UploadService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id_video = params['id_video'];

      //this.id_video = this.route.snapshot.params['id_video']; //aqui!!! url amigavél
      this.upload.getVideoPlayer(this.id_video).subscribe(video => {
        this.videos = <Video[]>video;
        this.video = this.videos[0];
        /* console.log(video); */

        /************ Substitui a propriedade url_video, Tags *********** */
        this.video.url_video = this.video.url_video.replace("watch?v=", "embed/");
        this.video.tags = this.video.tags.replaceAll(",", " #");
        /************ transforma minha url em URLSAFE  ************* */
        this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url_video);
        this.video_ready = true;

        this.upload.getChannels(parseInt(this.video.channel)).subscribe(channel => {
          this.channels = <Channel[]>channel;
          this.channel = this.channels[0];
          /* console.log(channel) */
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
        })

        this.upload.getLikes(this.id_video).subscribe(like => {
          this.likes = <Like[]>like;
          this.l = this.likes[0];

          if (!this.l) {
            this.l = {} as Like
          }

          if (this.l.count_like === "") {
            this.l.count_like = '0';
            this.l.id_video = this.id_video.toString();
          }
          console.log(this.l.count_like)

        });

      })
    })

  }

  public enviarComentario() {

    this.upload.postComment(this.id_video, this.autor_comentario, this.autor_email, this.post_comment_body, () => {
      console.log('teste para ver o que vem nos dados: ' + this.id_video, this.autor_comentario, this.autor_email, this.post_comment_body);

      this.comments.splice(0, 0, {
        name: this.autor_comentario,
        email: this.autor_email,
        comment: this.post_comment_body,
        post_date: new Date().toISOString().split("T")[0],
        user_photo: "../../../assets/imgs/anonymous.jpg"

      })
    });
  }
  public like() {
    this.id_video = this.route.snapshot.params['id_video'];
    this.upload.postLike(this.id_video.toString());
    //console.log('teste; ', this.id_video)

  }
}

//user_photo: this.user_photo,