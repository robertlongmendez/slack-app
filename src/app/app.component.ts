import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'slack-app';
  sessionStarted = false;
  prospectsName = '';


  constructor(public activeModal: NgbActiveModal) {

  }

  onSendMessage(chatForm) {
    if (!this.sessionStarted) {
      this.createSession(chatForm.name, chatForm.message);
      this.prospectsName = chatForm.name;
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
