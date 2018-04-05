import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-beyond-the-void-game',
  templateUrl: './beyond-the-void-game.component.html',
  styleUrls: ['./beyond-the-void-game.component.css']
})
export class BeyondTheVoidGameComponent implements OnInit {

  public name$: Observable<string>;

  constructor(private appService: AppService) {
    this.name$ = this.appService.name.asObservable();
  }

  ngOnInit() {


  }



}
