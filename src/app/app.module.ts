import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { MenuSideBarComponent } from './components/menu-side-bar/menu-side-bar.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemesComponent } from './pages/themes/themes.component';
import { VideoComponent } from './pages/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelComponent,
    MenuSideBarComponent,
    CommentsComponent,
    CardsComponent,
    PlaylistComponent,
    ChannelListComponent,
    ThemesComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

