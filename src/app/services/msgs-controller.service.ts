import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { Observable, of, from, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsgsControllerService {
  private messages : Message[] = [];
  private subject = new Subject<any>();

  constructor() {

  }
  public getMessages(): Observable<any> {
    return this.subject.asObservable();
//      return of(this.messages);
  }
  public addMessage(msg:Message){
    this.messages.push(msg);
    this.subject.next(this.messages);
    
  }
}
