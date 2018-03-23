import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BeyondTheVoidGameComponent } from './beyond-the-void-game/beyond-the-void-game.component';
import { BeyondTheVoidAboutComponent } from './beyond-the-void-about/beyond-the-void-about.component';
import { NexiumRushGameComponent } from './nexium-rush-game/nexium-rush-game.component';
import { NexiumRushAboutComponent } from './nexium-rush-about/nexium-rush-about.component';


@NgModule({
  declarations: [
    AppComponent,
    BeyondTheVoidGameComponent,
    BeyondTheVoidAboutComponent,
    NexiumRushGameComponent,
    NexiumRushAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
