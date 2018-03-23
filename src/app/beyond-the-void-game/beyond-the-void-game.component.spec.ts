import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondTheVoidGameComponent } from './beyond-the-void-game.component';

describe('BeyondTheVoidGameComponent', () => {
  let component: BeyondTheVoidGameComponent;
  let fixture: ComponentFixture<BeyondTheVoidGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeyondTheVoidGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeyondTheVoidGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
