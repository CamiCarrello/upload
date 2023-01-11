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

  channel?: Channel = undefined;

  comments: Comment[] = [];

  constructor(
    private upload: UploadService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    let id_video = this.route.snapshot.params['id_video'];
    this.upload.getVideoPlayer(id_video).subscribe(videos => {
      let video = videos[0];
      //mudei essa parte do código para poder mostra que "video" só tem uma posição pois o video recebe um video por vez!
      console.log(this.video);

      this.upload.getChannels(parseInt(video.channel)).subscribe(channel => {
        this.channel = channel[0];
      })

      this.upload.getVideoComment(parseInt(id_video)).subscribe(comment => {
        this.comments = <Comment[]>comment;
        this.comments.forEach(c => {
          if (c.name === "") {
            c.name = c.name.replaceAll('', "Anonymous")
            c.user_photo = "../../../assets/imgs/anonymous.jpg";
          } else {
            c.user_photo = "https://dev-project-upskill-grupo02.pantheonsite.io" + c.user_photo;
          }
          console.log(c.name);

          /*Para obter dados de date e converter*/
          /* let current_data_comment: Date = new Date();
          let date_comment = new Date(c.created)
          let Difference_In_Time_comment = current_data_comment.getTime() - date_comment.getTime();
          let Difference_In_Days_comment = Math.round(Difference_In_Time_comment / (1000 * 3600 * 24));
          c.created = Difference_In_Days_comment.toString();
          console.log(Difference_In_Days_comment); */
        })
        console.log(comment);
        console.log('estou comentando aqui');

      })

      //************ Substitui a propriedade url_video, Tags *********** */
      video.url_video = video.url_video.replace("watch?v=", "embed/");
      video.tags = video.tags.replaceAll(",", " #");
      console.log(video.tags)
      console.log(video.url_video)

      /*Para obter dados de date e converter*/
      /* let current_data: Date = new Date();
      let date2 = new Date(video.created)
      let Difference_In_Time = current_data.getTime() - date2.getTime();
      let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
      video.created = Difference_In_Days.toString();
      console.log(Difference_In_Days); */

      //************ transforma minha url em URLSAFE  ************* */

      video.url = this.sanitizer.bypassSecurityTrustResourceUrl(video.url_video);

      this.video= video;
    })
  }
}
