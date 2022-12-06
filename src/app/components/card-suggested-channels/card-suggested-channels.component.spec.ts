import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuggestedChannelsComponent } from './card-suggested-channels.component';

describe('CardSuggestedChannelsComponent', () => {
  let component: CardSuggestedChannelsComponent;
  let fixture: ComponentFixture<CardSuggestedChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSuggestedChannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSuggestedChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
