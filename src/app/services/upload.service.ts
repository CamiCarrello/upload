import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel } from './upload.model';
import { Video } from './upload.model';
import { Playlist } from './upload.model';

const BASE_URL = "https://dev-project-upskill-grupo02.pantheonsite.io/";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Video[]>(BASE_URL + "api/videos");
  }

  getChannelsList() {
      return this.http.get<Channel[]>(BASE_URL + "api/channel");
    }

  getChannels(id_channel: string) {
    return this.http.get<Channel[]>(BASE_URL + "api/channel/" + id_channel);
  }
  
  getPlaylist() {
    return this.http.get<Playlist[]>(BASE_URL + "api/playlist/5");
  }
}