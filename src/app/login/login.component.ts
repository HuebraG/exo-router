import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() newName = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

  /*dès qu'on envoie un nom, on notifie le parent via un event*/
  public sendName(name: string): void {
    this.newName.emit(name);
  }

}
