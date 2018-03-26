import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
// on doit ajouter /game pour les animations sinon elles ne se font pas
  { path: 'beyond-the-void', loadChildren: 'app/btv/btv.module#BtvModule', data : { animation: 'beyond-the-void/game' } },
  { path: 'nexium-rush', loadChildren: 'app/nr/nr.module#NrModule', data: { animation: 'nexium-rush/game' }  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
