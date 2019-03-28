import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  modelll: any = {};
  usersName: any;

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUsersName();
  }

  login() {
    this.authService.login(this.modelll).subscribe(
      next => {
        this.usersName = this.authService.getTokenInfo().unique_name;
        this.alertify.success("Welcome!");
      },
      error => {
        this.alertify.error("This email/password combination is not valid");
      }, () => {
        this.router.navigate(['/matches']);
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    this.alertify.warning("Goodbye!");
    this.router.navigate(['/home'])
  }

  getUsersName() {
    if (localStorage.getItem("token") !== null) {
      this.usersName = this.authService.getTokenInfo().unique_name;
    } else {
      return;
    }
  }
}
