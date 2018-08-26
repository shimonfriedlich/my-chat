import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
//import { MessageServiceService } from 'src/app/services/message-service.service';
import { MsgsControllerService } from 'src/app/services/msgs-controller.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  private messages : Message[];
 
  constructor( private messageServiceService: MsgsControllerService) { 
  }

  ngOnInit() {
    this.messageServiceService.getMessages().subscribe((result) => {
      this.messages = result;
      console.log('result:');
      console.log(result);
    });
  }

  sb() {
    //debugger;
    ////console.log(this.messageServiceService.messages);
   
  }
}
