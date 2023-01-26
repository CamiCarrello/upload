import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './pages/video/video.component';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { TagComponent } from './pages/tags/tags.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video/:id_video', component: VideoComponent },
  { path: 'channelList', component: ChannelListComponent },
  { path: 'channel/:id_channel', component: ChannelComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'tag/:id', component: TagComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
