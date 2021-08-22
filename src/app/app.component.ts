import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slack-app';
  sessionStarted = false;
  prospectsName = '';
  // chatForm: FormGroup;


  constructor() {

  }

  onSendMessage(chatForm: NgForm) {
    if (!this.sessionStarted) {
      this.createSession(chatForm.value.name, chatForm.value.message);
      this.prospectsName = chatForm.value.name;
      this.sendAndReceive();
      this.sessionStarted = true;
      } else {
        this.sendAndReceive();
      }
  }

  createSession(name: string, message: string) {

  }

  sendAndReceive() {

  }
}
