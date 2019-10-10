import { Component, OnInit } from '@angular/core';
import { MessageErrService } from '../message-error.service';
import { BaseDestroyableComponent } from '../BaseDestroyableComponent';

@Component({
  selector: 'usr-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss']
})
export class DisplayMessageComponent extends BaseDestroyableComponent {
  message: string;

  constructor(private messageErrService: MessageErrService) {
    super();
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    super.registerSubscribe(
      this.messageErrService.getOnMessage(),
      result => {
        this.message = result;
      },
      (err: any) => {
        console.log(err);
      }
    );

    super.registerSubscribe(
      this.messageErrService.getOnReset(),
      result => {
        this.message = '';
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  clearMessage() {
    this.messageErrService.reset();
  }

}
