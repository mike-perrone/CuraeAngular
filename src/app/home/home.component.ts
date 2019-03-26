import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  registerMode: any = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  clickRegister() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerModeWillbeMadeFalse: boolean) {
    this.registerMode = registerModeWillbeMadeFalse;
  }
}

//
