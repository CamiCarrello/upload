import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardsComponent } from './video-cards.component';

describe('VideoCardsComponent', () => {
  let component: VideoCardsComponent;
  let fixture: ComponentFixture<VideoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
