import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuggestedThemesComponent } from './card-suggested-themes.component';

describe('CardSuggestedThemesComponent', () => {
  let component: CardSuggestedThemesComponent;
  let fixture: ComponentFixture<CardSuggestedThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSuggestedThemesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSuggestedThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
