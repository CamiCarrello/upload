import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Channel, Video } from 'src/app/services/upload.model';

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

  constructor(private upload: UploadService, private route: ActivatedRoute, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    let id_channel = this.route.snapshot.params['id_channel']
    this.upload.getChannels(parseInt(id_channel)).subscribe(channel => {
      this.channels = <Channel[]>channel;
      this.channel = this.channels[0];
      // console.log(id_channel)

      this.upload.getChannelVideos(parseInt(id_channel)).subscribe(channel => {
        this.channels = <Channel[]>channel;
        // console.log(channel);
      })

     /*  Substitui a propriedade url_video, Tags
      this.videos.forEach(vid => {
        vid.url_video = vid.url_video.replace("watch?v=", "embed/");
        vid.tags = vid.tags.replaceAll(",", " #");
        console.log(vid.tags)
        console.log(vid.url_video)

        Para obter dados de date e converter
        let current_data: Date = new Date();
        let date2 = new Date(vid.created)
        var Difference_In_Time = current_data.getTime() - date2.getTime();
        let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
        this.video.created = Difference_In_Days.toString();
        console.log(Difference_In_Days);
      });

       transforma minha url em URLSAFE
      this.videos.forEach(video => {
        //com a mudança de videos para video o novo array tem só uma posição, precisei refazer o sanitizer:
        this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(video.url_video);
      }); */
    })
  }
}