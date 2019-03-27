import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./_services/auth.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { ErrorInterceptorProvider } from "./_services/error.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    //automaticallyaddsvalueComponentintomodule.tswhenwegeneratecomponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [AuthService, ErrorInterceptorProvider],
  bootstrap: [
    AppComponent //d
  ]
})
export class AppModule {}
// wait but we just told angular it was required
// we have said that
// but we havent told it to do anything
// need to look at validation
// formstate
// field states that angular keeps track of
