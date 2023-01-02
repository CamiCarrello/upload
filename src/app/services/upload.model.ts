import { SafeResourceUrl } from "@angular/platform-browser";

export interface ChannelsResponse {
    data: Channel[];
}

export interface Channel {
    id: string;
    channel_name: string;
    author: string;
    category:string;
    field_media_image: string;
    field_media_image_1: string;
}


export interface VideosResponse {
    data: Video[];
}

export interface Video {
    id: string;
    title: string;
    description:string;
    author_video: string;
    category: string;
    tags: string;
    channel: string;
    thumbnail: string;
    url_video:string;
    comment: string;
    duration: string;
    id_user: string;
    comment_count: string;
    url: SafeResourceUrl;
    created: string;
    user_name: string;
    user_photo: string;
}
export interface PlaylistResponse {
    data: Playlist[];
}

export interface Playlist {
    id: string;
    name: string;
    title: string;
    category:string;
    url_video: string;
    thumbnail: string;
}

export interface TagsResponse {
    data: Tag[];
  }
  
  export interface Tag {
   name: string;
}

export interface ThemesResponse {
    data: Themes[];

    
}
export interface Themes {
    id: string;
    title: string; 
    tags: string;
    user: string;
    header: string;
}