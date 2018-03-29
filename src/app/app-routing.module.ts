import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'beyond-the-void', loadChildren: 'app/btv/btv.module#BtvModule', data : { animation: 'beyond-the-void' } },
  { path: 'nexium-rush', loadChildren: 'app/nr/nr.module#NrModule', data: { animation: 'nexium-rush' }  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
