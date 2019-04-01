import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MatchesComponent } from "./members/matches/matches.component";
import { MessagesComponent } from "./messages/messages.component";
import { LikesListComponent } from "./likesList/likesList.component";
import { AuthGuard } from "./_guards/auth.guard";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { MemberDetailResolver } from "./_resolvers/member-detail.resolver";
import { MemberListResolver } from "./_resolvers/member-list.resolver.1";

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "matches", component: MatchesComponent, canActivate: [AuthGuard], resolve: {users: MemberListResolver} },
  { path: "matches/:id", component: MemberDetailComponent, canActivate: [AuthGuard], resolve: {user: MemberDetailResolver} },
  { path: "messages", component: MessagesComponent, canActivate: [AuthGuard] },
  { path: "likes", component: LikesListComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "", pathMatch: "full" }
];
