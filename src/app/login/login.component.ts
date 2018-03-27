import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() newName = new EventEmitter;
  public name: string;

  constructor() { }

  ngOnInit() {
  }

  public sendName(name: string): void {
    this.newName.emit(name);
  }

}
