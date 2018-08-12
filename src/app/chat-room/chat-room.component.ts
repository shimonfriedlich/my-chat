import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  messages : Message[];

  constructor() { 
    this.messages = [
      {
        id: 1,
        text: 'aaaaa'
      },
      {id: 2,
        text:'dfdddd'}
    ];

  }

  ngOnInit() {
  }

}
