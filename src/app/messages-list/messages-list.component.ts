import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input() messages:Message[];
  messages2;
  constructor(private messageServiceService: MessageServiceService) {
  
   }

  ngOnInit() {
    this.messageServiceService.xyz.subscribe((result) => {
      this.messages2 = result;
      console.log(2)
    })
  }

}
