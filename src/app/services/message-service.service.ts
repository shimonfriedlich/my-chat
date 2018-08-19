import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message';
import { Observable, of, from, Subject, BehaviorSubject } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class MessageServiceService {
  private messages: Message[];
  fireList: AngularFireList<Message>;
  xyz;
  

  public getMessages():Observable<Message[]>{
    return of(this.messages); //this.http.get<Question[]>('assets/mock/questions.json')
  }
  
  public sendMessage(msg: Message){
    this.messages.push(msg);
    this.xyz.next(this.messages);
    return of(true);
  }

  constructor(db : AngularFireDatabase) {

    this.fireList = db.list("items");

    this.messages = [
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
    this.xyz = new BehaviorSubject(this.messages); 
    

   }
  
   setMessage(){
     
   }
   
  }
