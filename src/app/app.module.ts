
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { CardsComponent } from './components/cards/cards.component';
import { MenuSideBarComponent } from './components/menu-side-bar/menu-side-bar.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { VideoComponent } from './pages/video/video.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelComponent,
    MenuSideBarComponent,
    CardsComponent,
    CommentsComponent,
    PlaylistComponent,
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

