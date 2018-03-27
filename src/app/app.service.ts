import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AppService {

  public name: string;

  constructor() { }

  getName(): Observable<string> {
    return of(this.name);
  }

  setName(name: string): void {
    this.name = name;
  }

}
