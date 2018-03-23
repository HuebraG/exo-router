import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyondTheVoidAboutComponent } from './beyond-the-void-about.component';

describe('BeyondTheVoidAboutComponent', () => {
  let component: BeyondTheVoidAboutComponent;
  let fixture: ComponentFixture<BeyondTheVoidAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeyondTheVoidAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeyondTheVoidAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
