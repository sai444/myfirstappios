import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  constructor(private nav: NavController) {}

  ngOnInit() {}
  signIn() {
    this.nav.navigateRoot("/signin");
  }
}
