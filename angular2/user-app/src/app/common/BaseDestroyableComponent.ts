import { OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

/**
 * Base class for all components with subscriptions which have to be unsubscribed on component's destroying
 */
export abstract class BaseDestroyableComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  abstract ngOnInit(): void;

  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item.unsubscribe());
  }

  registerSubscribe<T>(observable: Observable<T>,
                       next?: (value: T) => void,
                       error?: (error: any) => void,
                       complete?: () => void): void {
    this.subscriptions.push(observable.subscribe(next, error, complete));
  }
}
