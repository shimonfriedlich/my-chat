import { Component, OnInit, Output } from '@angular/core';
import { MessageServiceService } from '../services/message-service.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-send-messages-bar',
  templateUrl: './send-messages-bar.component.html',
  styleUrls: ['./send-messages-bar.component.css']
})
export class SendMessagesBarComponent implements OnInit {
  private messageServiceService:MessageServiceService
  constructor() {
    this.messageServiceService = new MessageServiceService();
  }
  public msgClick(i){
    console.log(i.value + " is an input from user");

    let m = new Message();
    m.id = 7;
    m.from = 4;
    m.to = 6;
    m.text = i.value


    this.messageServiceService.sendMessage(m).subscribe(res=>{
      console.log(res);
    }
      
    );
    
  }
  ngOnInit() {
  }

}
