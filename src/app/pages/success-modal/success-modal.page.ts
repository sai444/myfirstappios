import { NavController } from "@ionic/angular";
import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success-modal",
  templateUrl: "./success-modal.page.html",
  styleUrls: ["./success-modal.page.scss"]
})
export class SuccessModalPage implements OnInit {
  constructor(private modal: ModalController, private nav: NavController) {
    setTimeout(() => {
      this.modal.dismiss();
      this.nav.navigateRoot("/home");
    }, 10000);
  }

  ngOnInit() {}
}
