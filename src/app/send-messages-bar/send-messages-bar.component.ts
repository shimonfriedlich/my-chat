import { Component, OnInit, Output } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';
import { Message } from '../models/message';
import {MsgsControllerService} from '../services/msgs-controller.service'

@Component({
  selector: 'app-send-messages-bar',
  templateUrl: './send-messages-bar.component.html',
  styleUrls: ['./send-messages-bar.component.css']
})
export class SendMessagesBarComponent implements OnInit {
  
  constructor(private messageServiceService: MsgsControllerService) {
  }
  
  public msgClick(i) {
    console.log(i.value + " is an input from user");

    let m = new Message();
    m.id = 7;
    m.from = 4;
    m.to = 6;
    m.text = i.value;
        
    this.messageServiceService.addMessage(m);
   
  }
  ngOnInit() {

  }

}
