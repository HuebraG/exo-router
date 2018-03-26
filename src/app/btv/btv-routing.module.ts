import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeyondTheVoidGameComponent } from './beyond-the-void-game/beyond-the-void-game.component';
import { BeyondTheVoidAboutComponent } from './beyond-the-void-about/beyond-the-void-about.component';

const routes: Routes = [
  { path: 'game', component: BeyondTheVoidGameComponent, data: { animation: 'game' }  },
  { path: 'about', component: BeyondTheVoidAboutComponent, data: { animation: 'about' }  },
  { path: '', redirectTo: 'game', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BtvRoutingModule { }
