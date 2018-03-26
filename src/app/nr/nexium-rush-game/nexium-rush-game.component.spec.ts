import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NexiumRushGameComponent } from './nexium-rush-game.component';

describe('NexiumRushGameComponent', () => {
  let component: NexiumRushGameComponent;
  let fixture: ComponentFixture<NexiumRushGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NexiumRushGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NexiumRushGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
