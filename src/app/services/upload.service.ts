import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel } from './upload.model';
import { Video } from './upload.model';
import { Playlist } from './upload.model';
import { Tag } from 'src/app/services/upload.model';

const BASE_URL = "https://dev-project-upskill-grupo02.pantheonsite.io/api";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Video[]>(BASE_URL + "/videos");
  }

  getChannels() {
    return this.http.get<Channel[]>(BASE_URL + "/channel");
  }
  getPlaylist() {
    return this.http.get<Playlist[]>(BASE_URL + "/playlist/5");
  }

  getTags() {
    return this.http.get<Tag[]>(BASE_URL + "/tags");
  }
}
