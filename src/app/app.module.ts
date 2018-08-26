import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { SendMessagesBarComponent } from './send-messages-bar/send-messages-bar.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database'
import { environment } from 'src/environments/environment';
import { MessageServiceService } from './services/message-service.service';
import { MsgsControllerService } from './services/msgs-controller.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChatRoomComponent,
    MessagesListComponent,
    SendMessagesBarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MsgsControllerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
