import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-nexium-rush-game',
  templateUrl: './nexium-rush-game.component.html',
  styleUrls: ['./nexium-rush-game.component.css']
})
export class NexiumRushGameComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {

  }

}
