import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Channel, Video, Comment, Like, Dislike } from 'src/app/services/upload.model';
import { faThumbsUp, faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown, faBookmark } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  id_video!: number

  count_print_like!: number
  count_print_dislike!: number


  videos: Video[] = [];
  video: Video = {} as Video;

  channels: Channel[] = [];
  channel: Channel = {} as Channel;

  comments: Comment[] = [];

  likes: Like[] = [];
  l: Like = {} as Like;
  dislikes: Dislike[] = [];
  dl: Dislike = {} as Dislike;
  

  video_ready: boolean = false;
  like_ready: boolean = false;
  dislike_ready: boolean = false;


  autor_comentario: string = ""
  autor_email: string = ""
  post_comment_body: string = ""

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faBookmark = faBookmark;
  faBookmarkSolid = faBookmarkSolid;

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

        /************ Substitui a propriedade url_video, Tags *********** */
        this.video.url_video = this.video.url_video.replace("watch?v=", "embed/");
        this.video.tags = this.video.tags.replaceAll(",", " #");
        /************ transforma minha url em URLSAFE  ************* */
        this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url_video);
        this.video_ready = true;

        this.upload.getChannels(parseInt(this.video.channel)).subscribe(channel => {
          this.channels = <Channel[]>channel;
          this.channel = this.channels[0];
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

        this.upload.getDislikes(this.id_video).subscribe(dislike => {
          this.dislikes = <Dislike[]>dislike;
          this.dl = this.dislikes[0];
          console.log('teste do dl: '+this.dl.count_dislike);
          

          if (!this.dl) {
            this.dl = {} as Dislike
          }

          if (this.dl.count_dislike === "") {
            this.dl.count_dislike = '0';
            this.dl.id_video = this.id_video.toString();
          }
          console.log('bem aqui: ' + this.dl.count_dislike)

        });

      })
    })

  }

  public enviarComentario() {

    this.upload.postComment(this.id_video, this.autor_comentario, this.autor_email, this.post_comment_body, () => {

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
    this.upload.postLike(this.id_video.toString(), () => {
      this.count_print_like = parseInt(this.l.count_like) + 1
      console.log('aqui o contador de likes: ' + this.count_print_like);
      this.like_ready = true;

    });

   
  }
  public dislike() {
    this.upload.postDislike(this.id_video.toString(), () => {
      this.count_print_dislike = parseInt(this.dl.count_dislike) + 1
      this.dislike_ready = true;
    });
  }

  toggleFavorite(id_video: string) {
    this.upload.toggleFavorite(id_video);
  }

  itsFavorite(id_video: string) {
    return this.upload.itsFavorite(id_video);
  }
}
