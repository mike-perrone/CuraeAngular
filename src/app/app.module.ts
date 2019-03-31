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
import { AlertifyService } from "./_services/alertify.service";
import { BsDropdownModule } from "ngx-bootstrap";
import { MatchesComponent } from "./members/matches/matches.component";
import { LikesListComponent } from "./likesList/likesList.component";
import { MessagesComponent } from "./messages/messages.component";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./_guards/auth.guard";
import { UserService } from "./_services/user.service";
import { MemberCardComponent } from "./members/member-card/member-card.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MatchesComponent,
    LikesListComponent,
    MessagesComponent,
    MemberCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService
  ],
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
