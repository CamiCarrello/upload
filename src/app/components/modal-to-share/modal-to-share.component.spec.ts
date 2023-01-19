import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalToShareComponent } from './modal-to-share.component';

describe('ModalToShareComponent', () => {
  let component: ModalToShareComponent;
  let fixture: ComponentFixture<ModalToShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalToShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalToShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
