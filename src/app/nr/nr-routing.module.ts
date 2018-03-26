import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NexiumRushGameComponent } from './nexium-rush-game/nexium-rush-game.component';
import { NexiumRushAboutComponent } from './nexium-rush-about/nexium-rush-about.component';

const routes: Routes = [
  { path: 'game', component: NexiumRushGameComponent, data: { animation: 'game' } },
  { path: 'about', component: NexiumRushAboutComponent, data: { animation: 'about' } },
  { path: '', redirectTo: 'game', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NrRoutingModule { }
