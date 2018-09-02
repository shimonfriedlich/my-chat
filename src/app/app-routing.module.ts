import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomComponent } from 'src/app/chat-room/chat-room.component';
import { MyFormComponent } from 'src/app/my-form/my-form.component';

const routes: Routes = [
  {path:'chat', component :ChatRoomComponent},
  {path:'my-form', component :MyFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
