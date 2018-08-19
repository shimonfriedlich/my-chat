import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private messages: Message[];
  public getMessages():Observable<Message[]>{
    return of(this.messages); //this.http.get<Question[]>('assets/mock/questions.json')
  }
  
  public sendMessage(msg:string){
    this.messages.push({id:7,text:msg});
  }

  constructor() {
    this.messages =  [
      {
        id: 1,
        text: 'msg 1'
      },
      {id: 2,
        text:'msg 2'
      },
      {id: 3,
        text:'msg 3'
      }
      ];

   }
}
