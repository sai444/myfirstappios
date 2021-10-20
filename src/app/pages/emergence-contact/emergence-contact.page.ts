import { Component, OnInit } from "@angular/core";

import { CallNumber } from '@ionic-native/call-number';
@Component({
  selector: "app-emergence-contact",
  templateUrl: "./emergence-contact.page.html",
  styleUrls: ["./emergence-contact.page.scss"]
})
export class EmergenceContactPage implements OnInit {
  contactList: any = [
    {
      name: "Madhusudan",
      number: "+91 9972307117"
    },
  
  ];
  constructor() {}

  ngOnInit() {}
}
