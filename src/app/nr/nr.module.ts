import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NrRoutingModule } from './nr-routing.module';
import { NexiumRushGameComponent } from './nexium-rush-game/nexium-rush-game.component';
import { NexiumRushAboutComponent } from './nexium-rush-about/nexium-rush-about.component';
 
@NgModule({
  imports: [
    CommonModule,
    NrRoutingModule
  ],
  declarations: [NexiumRushGameComponent, NexiumRushAboutComponent]
})
export class NrModule { }
