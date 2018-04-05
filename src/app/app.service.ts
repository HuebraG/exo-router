import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AppService {

  public name: Subject<string> = new Subject<string>();



  constructor() { }

  changeName(name: string) {
    this.name.last(name);
  }

}
