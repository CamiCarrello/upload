import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ChannelComponent } from './pages/channel/channel.component';
import { MenuSideBarComponent } from './components/menu-side-bar/menu-side-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { ThemesComponent } from './pages/themes/themes.component';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideoComponent } from './pages/video/video.component';
import { VideoCardsComponent } from './components/video-cards/video-cards.component';
import { DiasPassadosPipe } from './dias-passados.pipe';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ModalToShareComponent } from './components/modal-to-share/modal-to-share.component';
import { TagComponent } from './pages/tag/tag.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChannelComponent,
    MenuSideBarComponent,
    ThemesComponent,
    CardsComponent,
    PlaylistComponent,
    ChannelListComponent,
    VideoComponent,
    VideoCardsComponent,
    DiasPassadosPipe,
    FavoritesComponent,
    ModalToShareComponent,
    TagComponent,
    HeaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
