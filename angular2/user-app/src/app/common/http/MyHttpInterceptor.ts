import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      // clone request and replace change the url
      const rewrittenReq = req.clone({
        url: req.url.indexOf('i18n') >= 0 ? req.url : environment.endoint + req.url
      });
      // send the cloned request to the next handler.
      return next.handle(rewrittenReq);
  }
}
