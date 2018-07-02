import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class searchService {
  private subject = new Subject<any>();


  sendKey(message: string): void {
    this.subject.next({text: message});
  }


  getKey(): Observable<any> {
    return this.subject.asObservable();
  }

}
