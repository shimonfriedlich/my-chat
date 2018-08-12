import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageServiceService } from 'src/app/services/message-service.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input() messages:Message[];
  constructor(private messageServiceService:MessageServiceService) {

    messageServiceService.getMessages().subscribe(x=> {
      this.messages = x; //x is the data return from service

    });
   }

  ngOnInit() {
  }

}
