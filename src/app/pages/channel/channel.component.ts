import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {

  channels: any = [
    {
        "id": "4",
        "channel_name": "Animals Channel",
        "author": "Mycaela Silva",
        "category": [
            "39",
            "1",
            "40",
            "2"
        ],
        "cover_photo": "15",
        "user_photo": "14"
    },
    {
        "id": "2",
        "channel_name": "Karol Food Channel",
        "author": "Karoline Rocha",
        "category": [
            "31",
            "32"
        ],
        "cover_photo": "8",
        "user_photo": "9"
    },
    {
        "id": "1",
        "channel_name": "Cami Channel",
        "author": "Camila Silva",
        "category": [
            "5",
            "4"
        ],
        "cover_photo": "5",
        "user_photo": "6"
    }
];

  videos: any = [
    {
      "id": "1",
      "title": "DOOM",
      "description": "DOOM is back! With a brutal single-player campaign, iconic fast-paced multiplayer, and the ability to create and play your own levels with SnapMap, DOOM delivers all the guns, demons and action you’ve been craving. It’s time to Fight Like Hell.",
      "author_video": "",
      "category": "Action, Action Adventure, Fighting",
      "tags": "5, 4",
      "channel": "Cami Channel",
      "thumbnail": "/sites/default/files/styles/medium/public/oembed_thumbnails/2022-11/OJergRzM8sIUUkIxH8lXzm9nYHBaaKrtcto22G_q-Q4.jpg?itok=1v9cTqQH",
      "url_video": "https://www.youtube.com/watch?v=RO90omga8D4&amp;ab_channel=BethesdaSoftworks",
      "comment": "",
      "duration": "short",
      "id_user": "1",
      "comment_count": "0"
  },
  {
      "id": "2",
      "title": "SUPER MARIO BROS",
      "description": "",
      "author_video": "",
      "category": "Action Adventure",
      "tags": "5, 7",
      "channel": "Cami Channel",
      "thumbnail": "/sites/default/files/styles/medium/public/oembed_thumbnails/2022-11/tkbblGLNb6DWg6Vq87S8kpsvQ4xqwZzvvDWOQjoeXgs.jpg?itok=7o7im_lg",
      "url_video": "https://www.youtube.com/watch?v=-QyqfAVtIi0&amp;ab_channel=MelhoresTrailersdeFilmes",
      "comment": "",
      "duration": "short",
      "id_user": "1",
      "comment_count": "0"
  },
  {
      "id": "3",
      "title": "Cutest cats in the world",
      "description": "",
      "author_video": "",
      "category": "",
      "tags": "1, 2",
      "channel": "",
      "thumbnail": "/sites/default/files/styles/medium/public/oembed_thumbnails/2022-11/zORYlh3rj0zn1vrwlN8BgG5ez4WoLlvzyEY72lvzMWY.jpg?itok=drsnFlC-",
      "url_video": "https://www.youtube.com/watch?v=kZmOU4Ytgxo&amp;ab_channel=AVESeROEDORES",
      "comment": "",
      "duration": "short",
      "id_user": "1",
      "comment_count": "0"
  },
  {
      "id": "7",
      "title": "The Legend of Zelda: Breath of the Wild - Full Game ",
      "description": "",
      "author_video": "",
      "category": "",
      "tags": "11, 5, 4",
      "channel": "Cami Channel",
      "thumbnail": "/sites/default/files/styles/medium/public/oembed_thumbnails/2022-12/cbJY-3N7t3TdlzbP1qnKG3naDwTXCjZ5L6WHQiChBUQ.jpg?itok=ZpKr_jUU",
      "url_video": "https://www.youtube.com/watch?v=Ou6UsEf1J_o",
      "comment": "",
      "duration": "long",
      "id_user": "1",
      "comment_count": "0"
  },
  {
      "id": "10",
      "title": "Sea Food Paella 🥘🥘 | Authentic Spanish Sea Food Paella",
      "description": "",
      "author_video": "Karoline Rocha",
      "category": "",
      "tags": "33, 31",
      "channel": "Karol Food Channel",
      "thumbnail": "/sites/default/files/styles/medium/public/oembed_thumbnails/2022-12/m6cRwRu5XA7aIIy7wx8p4jw7gI9iRiiEhW3zRp_n_x0.jpg?itok=DgNb3V4_",
      "url_video": "https://www.youtube.com/watch?v=crjaMcC6OAQ",
      "comment": "",
      "duration": "short",
      "id_user": "1",
      "comment_count": "0"
  },
  {
      "id": "11",
      "title": "Spaghetti Pomodoro With Burrata",
      "description": "",
      "author_video": "Karoline Rocha",
      "category": "",
      "tags": "35, 31, 32",
      "channel": "Karol Food Channel",
      "thumbnail": "/sites/default/files/styles/medium/public/oembed_thumbnails/2022-12/paG7fItzhc7m6R4mueQwmHQFya4f8CbkEe6krPk1Doo.jpg?itok=MpJH72hJ",
      "url_video": "https://www.youtube.com/watch?v=yRBS88dcKRo",
      "comment": "",
      "duration": "short",
      "id_user": "1",
      "comment_count": "0"
  },
  {
      "id": "12",
      "title": "Donkey Kong Country: Tropical Freeze Gameplay Trailer - Nintendo Switch",
      "description": "Arctic invaders have turned Donkey Kong Island into their personal frozen fortress, and it’s up to you to save the day when Donkey Kong Country: Tropical Freeze launches on Nintendo Switch May 4th! Barrel-blast into this critically acclaimed adventure, complete with a banana-bunch of new features. Traverse islands packed with platforming perfection and nonstop action as the classic Kongs in the original game, or mix things up by playing the story as Funky Ko",
      "author_video": "Tonton",
      "category": "Action Adventure",
      "tags": "5",
      "channel": "Cami Channel",
      "thumbnail": "/sites/default/files/styles/medium/public/oembed_thumbnails/2022-12/0s3oNDfjZN9I4SJKM4tvRQE3jx9eRSmGvqOiczD8s80.jpg?itok=YfG8MTN7",
      "url_video": "https://www.youtube.com/watch?v=_5p0SiWHwvw&amp;ab_channel=NintendoofAmerica",
      "comment": "",
      "duration": "short",
      "id_user": "4",
      "comment_count": "0"
  },
  {
      "id": "13",
      "title": "Bobó de camarão",
      "description": "Confira como fazer uma receita típica do Nordeste e incrível: bobó de camarão! Você vai amar essa deliciosa mistura do fruto do mar com a mandioca, formando um creme maravilhoso e cheio de sabor.",
      "author_video": "Tudo Gostoso",
      "category": "",
      "tags": "32",
      "channel": "Karol Food Channel",
      "thumbnail": "/sites/default/files/styles/medium/public/oembed_thumbnails/2022-12/w7aLZJPt2cgMyqBYNCFktLsRTQZp79A-uy7PgqbXY-U.jpg?itok=WN0FAXdX",
      "url_video": "https://www.youtube.com/watch?v=o6lX3kHYb_w&amp;ab_channel=TudoGostoso",
      "comment": "",
      "duration": "short",
      "id_user": "1",
      "comment_count": "0"
  }
  ];  

  constructor(private upload: UploadService) { }

  ngOnInit(): void {
    /* this.upload.getChannel().subscribe(data => {
        console.log(data)
    }) */
  }
}
