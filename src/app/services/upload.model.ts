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
}

export interface PlaylistResponse {
    data: Playlist[];
}

export interface Playlist {
    title: string;
    category:string;
    videos_playlist: string;
}