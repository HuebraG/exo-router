import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeyondTheVoidGameComponent } from './beyond-the-void-game/beyond-the-void-game.component';
import { BeyondTheVoidAboutComponent } from './beyond-the-void-about/beyond-the-void-about.component';
import { NexiumRushGameComponent } from './nexium-rush-game/nexium-rush-game.component';
import { NexiumRushAboutComponent } from './nexium-rush-about/nexium-rush-about.component';


const routes: Routes = [
  { path: 'beyond-the-void/game', component: BeyondTheVoidGameComponent },
  { path: 'beyond-the-void/about', component: BeyondTheVoidAboutComponent },
  { path: 'nexium-rush/game', component: NexiumRushGameComponent },
  { path: 'nexium-rush/about', component: NexiumRushAboutComponent },
  { path: 'nexium-rush', redirectTo: '/nexium-rush/game', pathMatch: 'full' },
  { path: 'beyond-the-void', redirectTo: '/beyond-the-void/game', pathMatch: 'full' },
  {path: ':game', redirectTo: '/:game', pathMatch:'full'},
  { path: '', redirectTo: '/beyond-the-void/game', pathMatch: 'full' }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
