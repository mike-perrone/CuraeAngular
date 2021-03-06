import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  // implementing the http interceptor created in angular 4.3
  intercept(
    // HttpInterceptor requires an intercept as its required method
    req: HttpRequest<any>, // it takes a request so HTTPRequest<any>
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            return throwError(
              "The Email and password combination is not corrected"
            );
          }
          const applicationError = error.headers.get("Application-Error");
          if (applicationError) {
            console.error(applicationError);
            return throwError(applicationError);
          }
          const serverError = error.error;
          let modalStateErrors = "";
          if (serverError && typeof serverError === "object") {
            for (const key in serverError) {
              if (serverError[key]) {
                modalStateErrors += serverError[key] + "\n";
              }
            }
          }
          return throwError(
            modalStateErrors || serverError || "Unknown Error!"
          );
        }
      })
    );
  }
  // intercept method from interface
}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};
// if you implememnt an interface you have to satisfy all of its methods
