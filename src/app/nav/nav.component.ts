import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  modelll: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.modelll).subscribe(
      next => {
        console.log("Logged in");
      },
      error => {
        console.log(error);
      }
    );
  }

  loggedIn() {
    if (localStorage.getItem("token") !== "" && localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem("token");
  }
}
