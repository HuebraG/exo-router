import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { Router } from '@angular/router';
import { AppService } from './app.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({
            position: 'fixed',
            transform: 'translateX(-100%)',
            //permet de passer en dessous du premier nav
            zIndex: '0',
          }),
          {optional:true}),

        // move page in screen from left to right, passant en dessous du menu de gauche
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
  
          { optional: true }),

      ])
    ])
  ]
})
export class AppComponent {

  //variable utilisée pour récupérer le nom du jeu
  public game: string;
  public username: string;


  constructor(private appService: AppService, private router: Router) {
    /* problème ici : ne renvoie que '/', même si on reload la page à une adresse spécifique*/
    this.game = this.router.url;
  }

  ngOnInit(): void {
  }

  //on récupère le nom du jeu
  public gameChoice(gameName: string): void {
    this.game = gameName;
  }

  //permet de récupérer la string stockée dans animation pour pouvoir utiliser les animations
  public getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

  public setName(name: string): void {
   this.appService.changeName(name);
  }
  
}
