import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { MenuSideBarComponent } from './components/menu-side-bar/menu-side-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideoComponent } from './pages/video/video.component';
import { DiasPassadosPipe } from './dias-passados.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelComponent,
    MenuSideBarComponent,
    ThemesComponent,
    CardsComponent,
    CommentsComponent,
    PlaylistComponent,
    ChannelListComponent,
    VideoComponent,
    DiasPassadosPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }