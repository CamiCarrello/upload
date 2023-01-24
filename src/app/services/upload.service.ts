import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Channel, Themes, Video, Playlist, VideoCard, PostCommentChannel } from './upload.model';
import { Tag } from 'src/app/services/upload.model';

const BASE_URL_RAW = 'https://dev-project-upskill-grupo02.pantheonsite.io/';
const BASE_URL = BASE_URL_RAW + 'api/';

@Injectable({
  providedIn: 'root',
})

export class UploadService {
  favorites: string[] = JSON.parse(localStorage.getItem('favorite') || '[]');

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Video[]>(BASE_URL + 'videos');
  }

  getVideoCards(id_channel: number) {
    return this.http.get<VideoCard[]>(
      BASE_URL + 'channel/videos/' + id_channel
    );
  }

  getChannelVideos(id_channel: number) {
    return this.http.get<Channel[]>(BASE_URL + 'channel/videos/' + id_channel);
  }

  getUserPhoto(id_video: number) {
    return this.http.get<Video[]>(BASE_URL + 'channel/videos/' + id_video);
  }

  getVideoPlayer(id_video: number) {
    return this.http.get(BASE_URL + 'video/' + id_video);
  }

  getVideoComment(id_video: number) {
    return this.http.get(BASE_URL + 'comment/video/' + id_video);
  }

  getCommentChannel(id_channel: number) {
    return this.http.get(BASE_URL + 'comment/channel/' + id_channel);
  }

  getChannelsList() {
    return this.http.get<Channel[]>(BASE_URL + 'channels');
  }

  getChannels(id_channel: number) {
    return this.http.get(BASE_URL + 'channel/' + id_channel);
  }

  getPlaylist() {
    return this.http.get<Playlist[]>(BASE_URL + 'playlist');
  }

  getPlaylistVideo(id: string) {
    return this.http.get<Playlist[]>(BASE_URL + 'playlist/videos/' + id);
  }

  getTags() {
    return this.http.get<Tag[]>(BASE_URL + 'tags');
  }

  getVideoTags(id_tag: number) {
    return this.http.get<Video[]>(BASE_URL + 'videos/tag/' + id_tag);
  }

  getThemes() {
    return this.http.get<Themes[]>(BASE_URL + 'thematic-article');
  }

  getSuggestedThemes(id_theme: number) {
    return this.http.get(BASE_URL + 'thematic-article/' + id_theme);
  }

  postCommentChannel(id_channel: number, name: string, email: string, comment: string) {
    let post_comment_channel: PostCommentChannel = {
      entity_id: [{ target_id: id_channel }],
      entity_type: [{ value: 'node' }],
      comment_type: [{ target_id: 'content_comment' }],
      field_name: [{ value: 'field_comment' }],
      field_email_content_commet: [{ value: email }],
      field_nome_content_comment_: [{ value: name }],
      comment_body: [{ value: comment, format: 'plain_text' }],
    };

    this.http
      .post(BASE_URL_RAW + 'comment', post_comment_channel)
      .subscribe(() => { });
  }

  getFavorites() {
    const favorites = localStorage.getItem("favorite")
    if (favorites) {
      return JSON.parse(favorites);
    }
    return [];
  }

  toggleFavorite(id_video: string) {

    if (!this.itsFavorite(id_video)) {
      //adicionar
      this.favorites.push(id_video);
    }
    else {
      // remover
      let indice = this.favorites.indexOf(id_video);
      this.favorites.splice(indice, 1);
    }

    localStorage.setItem("favorite", JSON.stringify(this.favorites));

  }
  itsFavorite(id_video: string) {
    return this.favorites.includes(id_video);
  }
}
