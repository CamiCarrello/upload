import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { Channel, Video, Comment, Like, Dislike } from 'src/app/services/upload.model';
import { faThumbsUp, faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FormControl, Validators } from '@angular/forms';

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

  autor_comentario = new FormControl('', [Validators.required]);
  autor_email = new FormControl('', [Validators.required, Validators.email]);
  post_comment_body = new FormControl('', [Validators.required]);

  formError = '';

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faBookmark = faBookmark;
  faBookmarkSolid = faBookmarkSolid;

  constructor(private upload: UploadService, private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const videoPath = params['id_video'];
      this.upload.getVideos().subscribe((videos) => {
        const matchingVideo = videos.find((video) =>
          video.path.endsWith('/' + videoPath)
        ); // vamos a cada video e vemos se o path deste video matches o path que está ne url.
        if (matchingVideo) {
          this.id_video = parseInt(matchingVideo.id);

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
              this.likes = <Like[]>like
              this.l = this.likes[0]

              if (!this.l) {
                this.l = {} as Like
              }

              if (this.l.count_like === "") {
                this.l.count_like = '0';
                this.l.id_video = this.id_video.toString()
              }
              console.log(this.l.count_like)
            })

            this.upload.getDislikes(this.id_video).subscribe(dislike => {
              this.dislikes = <Dislike[]>dislike;
              this.dl = this.dislikes[0]

              if (!this.dl) {
                this.dl = {} as Dislike
              }

              if (this.dl.count_dislike === "") {
                this.dl.count_dislike = '0';
                this.dl.id_video = this.id_video.toString()
              }
              // console.log(this.dl.count_dislike)
            })
          })
        }
      })
    })
  }

  private validateForm() {
    this.formError = '';
    if (this.autor_email.invalid) {
      if (this.autor_email.hasError('email')) {
        this.formError = 'Email inválido!';
      } else if (this.autor_email.hasError('required')) {
        this.formError = 'Por favor, escreva o seu email!';
      }
      return false;
    }
    if (this.autor_comentario.invalid) {
      this.formError = 'Escreva o seu nome!';
      return false;
    }

    if (this.post_comment_body.invalid) {
      this.formError = 'Comentário vazio! Escreva algo!';
      return false;
    }
    return true;
  }

  public enviarComentario() {
    if (!this.validateForm()) {
      return;
    }

    const email = this.autor_email.value ?? '';
    const comment = this.post_comment_body.value ?? '';
    const name = this.autor_comentario.value ?? '';

    this.upload.postComment(this.id_video, name, email, comment, () => {
      this.comments.splice(0, 0, {
        name, email, comment, post_date: new Date().toISOString().split('T')[0],
        user_photo: '../../../assets/imgs/anonymous.jpg'
      });

      this.autor_comentario.setValue('');
      this.autor_email.setValue('');
      this.post_comment_body.setValue('');
    });
  }

  public like() {
    this.upload.postLike(this.id_video.toString(), () => {
      this.count_print_like = parseInt(this.l.count_like) + 1
      console.log('aqui o contador de likes: ' + this.count_print_like);
      this.like_ready = true
    })
  }

  public dislike() {
    this.upload.postDislike(this.id_video.toString(), () => {
      this.count_print_dislike = parseInt(this.dl.count_dislike) + 1
      this.dislike_ready = true;
    })
  }

  toggleFavorite(id_video: string) {
    this.upload.toggleFavorite(id_video);
  }

  itsFavorite(id_video: string) {
    return this.upload.itsFavorite(id_video);
  }
}
