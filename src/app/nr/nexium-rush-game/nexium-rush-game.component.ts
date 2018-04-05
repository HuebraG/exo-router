import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-nexium-rush-game',
  templateUrl: './nexium-rush-game.component.html',
  styleUrls: ['./nexium-rush-game.component.css']
})
export class NexiumRushGameComponent implements OnInit {

  public name$: Observable<string>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.name$ = this.appService.name.asObservable();
  }


}
