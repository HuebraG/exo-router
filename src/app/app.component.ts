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
            transform: 'translateX(-100%)'
          }),
          {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('500ms ease',
            style({
              opacity: 1,
              transform: 'translateX(0%)'
            })
          ),
        {optional:true}),
      ])
    ])
  ]
})
export class AppComponent {

  private game: string;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.game = "beyond-the-void";
  }

  choixDuJeu(chaine: string): void {
    this.game = chaine;
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

}
