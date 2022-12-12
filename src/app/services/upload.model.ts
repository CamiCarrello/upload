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