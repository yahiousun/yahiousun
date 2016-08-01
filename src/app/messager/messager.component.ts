import { Component, ElementRef, ViewChild, AfterViewInit, QueryList } from '@angular/core';
import { MessageList } from './message-list.component';

@Component({
  selector: 'messager',
  styleUrls: [
    './messager.style.css'
  ],
  directives: [
    MessageList
  ],
  template: `
    <message-list [messages]="messages"></message-list>
  `,
  host: {
    '[style.height]': 'height + "px"'
  },
})
export class Messager implements AfterViewInit {
  messages = [];
  data: Array<any>;
  height = 0;
  @ViewChild(MessageList) messageList: MessageList;
  constructor(private elementRef:ElementRef) {
    this.elementRef = elementRef;
    setTimeout(() => {
      console.log(this.elementRef.nativeElement.offsetHeight)
    })
  }

  ngAfterViewInit() {
    this.asyncDataWithWebpack();
    console.log(this.messageList)
  }

  pushMessage() {
    if (this.data && this.data.length) {
      setTimeout(() => {
        this.messages.push(this.data.shift());
        this.pushMessage();
        setTimeout(() => {
          // var height = 0;
          this.height = this.messageList.elementRef.nativeElement.offsetHeight;
          // this.messageComponent.forEach((item) => {
          //   var styles = window.getComputedStyle(item.elementRef.nativeElement);
          //   var margin = parseFloat(styles['marginTop']) +
          //                parseFloat(styles['marginBottom']);
          //   height += item.elementRef.nativeElement.offsetHeight + margin;
          // })

          // this.height = height;
        })
      }, 2000);
    }
  }

  asyncDataWithWebpack() {
    var asyncDataPromiseFactory = require('es6-promise!assets/messages.json');
    setTimeout(() => {
    
      let asyncDataPromise = asyncDataPromiseFactory();
      asyncDataPromise.then(json => {
        this.data = json;
        this.data.forEach((item) => {
          if (!item.timestamp) {
            item.timestamp = Date.now()
          }
        });
        this.pushMessage();
      });
    
    });
  }

}
