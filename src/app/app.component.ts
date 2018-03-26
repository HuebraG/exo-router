import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';



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
  private game: string;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.game = "beyond-the-void";
  }

  //on récupère le nom du jeu
  gameChoice(gameName: string): void {
    this.game = gameName;
  }

  //permet de récupérer la string stockée dans animation pour pouvoir utiliser les animations
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

}
