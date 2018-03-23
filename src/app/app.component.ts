import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private game: string;
  private machin: string;

  constructor() { }

  ngOnInit(): void {
    this.game = 'salut';
  }

  choixDuJeu(chaine: string): void {
    this.game = chaine;
  }


}
