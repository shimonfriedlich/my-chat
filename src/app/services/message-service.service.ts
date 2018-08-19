import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';
import { Observable, of } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private messages: Message[] =  [
    {
      id: 1,
      text: 'msg 1',
      from:3,
      to:4
    },
    {id: 2,
      text:'msg 2',
      from:3,
      to:4
    },
    {id: 3,
      text:'msg 3',
      from:3,
      to:4
    }
  ];
  public getMessages():Observable<Message[]>{
    return of(this.messages); //this.http.get<Question[]>('assets/mock/questions.json')
  }
  
  public sendMessage(msg:string){
    this.messages.push({id:7,text:msg,from:4,to:6});
    return of(true);
  }

  constructor() {


   }
  
   
  }
