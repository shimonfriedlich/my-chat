import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  private messages : Message[];
  private messageServiceService: MessageServiceService;
  constructor() { 
    this.messageServiceService = new MessageServiceService();
  }

  ngOnInit() {
    this.messageServiceService.getMessages().subscribe((result) => {
      this.messages = result;
    })
  }

}
