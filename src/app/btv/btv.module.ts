import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtvRoutingModule } from './btv-routing.module';
import { BeyondTheVoidGameComponent } from './beyond-the-void-game/beyond-the-void-game.component';
import { BeyondTheVoidAboutComponent } from './beyond-the-void-about/beyond-the-void-about.component'

@NgModule({
  imports: [
    CommonModule,
    BtvRoutingModule
  ],
  declarations: [BeyondTheVoidGameComponent, BeyondTheVoidAboutComponent]
})
export class BtvModule { }
