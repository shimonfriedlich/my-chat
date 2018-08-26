import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';
//import { MessageServiceService } from '../services/message-service.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input() messages: Message[];

  constructor() {

  }

  ngOnInit() {
  }

}
