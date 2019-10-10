import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MessageErrService {

  private onMessage: EventEmitter<any> = new EventEmitter<any>();
  private onReset: EventEmitter<any> = new EventEmitter<any>();

  emit(err: any) {
    console.log('emit called');
    this.onMessage.emit(err);
  }

  reset() {
    console.log('reset called');
    this.onReset.emit();
  }

  getOnMessage() {
    return this.onMessage;
  }

  getOnReset() {
    return this.onReset;
  }
}
