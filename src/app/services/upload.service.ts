import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel, Themes, Video, Playlist } from './upload.model';
import { Tag } from 'src/app/services/upload.model';



const BASE_URL = "https://dev-project-upskill-grupo02.pantheonsite.io/api/";

@Injectable({
  providedIn: 'root'
})
export class UploadService { 

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Video[]>(BASE_URL + "videos");
  }
  getVideoPlayer(id_video: number) {

    return this.http.get(BASE_URL + "video/" + id_video);
  }

  getChannelsList() {
    return this.http.get<Channel[]>(BASE_URL + "channel");
  }

  getChannels(id_channel: string) {
    return this.http.get<Channel[]>(BASE_URL + "channel/" + id_channel);
  }
  getPlaylist() {
    return this.http.get<Playlist[]>(BASE_URL + "playlist");
  }

  getPlaylistVideo(id: string) {
    return this.http.get<Playlist[]>(BASE_URL + "playlist/videos/" + id);
  }

  getTags() {
    return this.http.get<Tag[]>(BASE_URL + "tags");
  }
  getThematic() {
    return this.http.get<Themes[]>(BASE_URL + "thematic-article");
  }
}