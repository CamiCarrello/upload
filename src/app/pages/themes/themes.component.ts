import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';
import { Themes } from 'src/app/services/upload.model';
@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  constructor(private upload: UploadService) { }

  themes: Themes[] = [];

  ngOnInit(): void {
    this.upload.getThemes().subscribe(theme => {
      this.themes = theme;
  })
  }

}

