import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NexiumRushAboutComponent } from './nexium-rush-about.component';

describe('NexiumRushAboutComponent', () => {
  let component: NexiumRushAboutComponent;
  let fixture: ComponentFixture<NexiumRushAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NexiumRushAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NexiumRushAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
