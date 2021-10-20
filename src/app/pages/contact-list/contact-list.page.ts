import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.page.html",
  styleUrls: ["./contact-list.page.scss"]
})
export class ContactListPage implements OnInit {
  contactList: any = [
    {
      img: "../../../assets/image_svg/contack_patrick.svg",
      name: "Patrick Palmer",
      address: "Plot 1 Buford House, Woodland Way, London UK"
    },
    {
      img: "../../../assets/image_svg/contact_jenifer.svg",
      name: "Amanda Fox",
      address: "Plot 1 Buford House, Woodland Way, London UK"
    },
    {
      img: "../../../assets/image_svg/ryan.svg",
      name: "Ryan Young",
      address: "Plot 1 Buford House, Woodland Way, London UK"
    },
    {
      img: "../../../assets/image_svg/terry.svg",
      name: "Terry Griffin",
      address: "Plot 1 Buford House, Woodland Way, London UK"
    },
    {
      img: "../../../assets/image_svg/fisher.svg",
      name: "Patrick Fisher",
      address: "Plot 1 Buford House, Woodland Way, London UK"
    },
    {
      img: "../../../assets/image_svg/natasha.svg",
      name: "Natasha Gibson",
      address: "Plot 1 Buford House, Woodland Way, London UK"
    },
    {
      img: "../../../assets/image_svg/pearson.svg",
      name: "Will Pearson",
      address: "Plot 1 Buford House, Woodland Way, London UK"
    }
  ];
  constructor(private nav: NavController) {}
  selectDelivery() {
    this.nav.navigateForward("/select-delivery");
  }
  ngOnInit() {}
}
