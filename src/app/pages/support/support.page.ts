import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-support",
  templateUrl: "./support.page.html",
  styleUrls: ["./support.page.scss"]
})
export class SupportPage implements OnInit {
  constructor(private nav: NavController) {}

  ngOnInit() {}
  about() {
    this.nav.navigateForward("/about");
  }
  policy() {
    this.nav.navigateForward("/policy");
  }
  condition() {
    this.nav.navigateForward("/condition");
  }
  contactUs() {
    this.nav.navigateForward("/contact");
  }
  faqpage() {
    this.nav.navigateForward("/faq");
  }
}
