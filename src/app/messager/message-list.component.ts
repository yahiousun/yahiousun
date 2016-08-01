import { Component, ElementRef, Input } from '@angular/core';
import { Message } from './message.component';

@Component({
  selector: 'message-list',
  styleUrls: [
    './message-list.style.css'
  ],
  directives: [
    Message
  ],
  template: `
    <message-item *ngFor="let message of messages;" [message]="message" color="primary"></message-item>
  `,
  host: {
    '[style.height]': 'height + "px"'
  },
})
export class MessageList {
  @Input() public messages: any;
  constructor(public elementRef:ElementRef) {
    this.elementRef = elementRef;
  }
}
