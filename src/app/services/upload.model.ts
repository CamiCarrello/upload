export interface ChannelsResponse {
    data: Channel[];
}

export interface Channel {
    channel_name: string;
    author: string;
    category:string;
    cover_photo: string;
    user_photo: string;
    nid: string;
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