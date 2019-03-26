import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter(); // add an output to registerComponent cancel register
  model: any = {}; // output properties emit events
  // so we need to create a new case of event emitter
  // four parts- output property itself and assign it to new event emitter
  // second part is going into our cancel method down below or whatever method we want to use to emit the event
  // and target the cancel register methid created using this.method.emit('value we want to emit'(false))
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  cancel() {
    this.cancelRegister.emit(false);
  }
  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log("user created");
      },
      error => {
        console.log(error);
      }
    );
  }
}
