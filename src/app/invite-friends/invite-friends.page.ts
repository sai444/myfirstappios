import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-invite-friends",
  templateUrl: "./invite-friends.page.html",
  styleUrls: ["./invite-friends.page.scss"]
})
export class InviteFriendsPage implements OnInit {
  contactList: any = [
    {
      name: "Albanian James",
      number: "+44 326 985 3695"
    },
    {
      name: "Array McDonald",
      number: "+44 326 985 3695"
    },
    {
      name: "Ancine Henderson",
      number: "+44 326 985 3695"
    },
    {
      name: "Amanda Jordan",
      number: "+44 326 985 3695"
    },
    {
      name: "Chris James",
      number: "+44 326 985 3695"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
