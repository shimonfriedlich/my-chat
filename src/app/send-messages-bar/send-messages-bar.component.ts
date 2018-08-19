import { Component, OnInit, Output } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';

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
    this.messageServiceService.sendMessage(i.value).subscribe(res=>{
      console.log(res);
    }
      
    );
    
  }
  ngOnInit() {
  }

}
