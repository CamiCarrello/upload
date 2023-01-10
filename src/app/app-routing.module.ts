import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { VideoComponent } from './pages/video/video.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video/:id_video', component: VideoComponent },
  { path: 'channelList', component: ChannelListComponent },
  { path: 'channel/:id_channel', component: ChannelComponent },
  { path: 'suggested_themes/:id_theme', component: ThemesComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'themes', component: ThemesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
