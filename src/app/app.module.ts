import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { MenuSideBarComponent } from './components/menu-side-bar/menu-side-bar.component';
import { CardSuggestedChannelsComponent } from './components/card-suggested-channels/card-suggested-channels.component';
import { CardSuggestedThemesComponent } from './components/card-suggested-themes/card-suggested-themes.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelComponent,
    MenuSideBarComponent,
    CardSuggestedChannelsComponent,
    CardSuggestedThemesComponent,
    CommentsComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

