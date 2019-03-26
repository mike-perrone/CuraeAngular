import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
}) // this allows us to inject things into our service
// components are automatically injectable
// by default but service is not
// providedIn: 'root'
// tells everywhere else that its being provided from app.module.ts the root module
// any components which use it ^^
// also need to add this to app module
export class AuthService {
  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post("https://localhost:44332/api/auth/login", model).pipe(
      map((response: any) => {
        const userToken = response;
        if (userToken) {
          localStorage.setItem("token", userToken.token);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post("https://localhost:44332/api/auth/register", model);
  }
}
