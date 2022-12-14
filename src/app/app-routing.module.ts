import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChannelComponent } from './pages/channel/channel.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'channel', component: ChannelComponent},
  {path: 'playlist', component: PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
