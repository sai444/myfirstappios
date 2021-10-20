import { PaynowModalPage } from "./../paynow-modal/paynow-modal.page";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-amount-modal",
  templateUrl: "./amount-modal.page.html",
  styleUrls: ["./amount-modal.page.scss"]
})
export class AmountModalPage implements OnInit {
  constructor(private modalcontroller: ModalController) {}

  ngOnInit() {}

  cancel() {
    this.modalcontroller.dismiss();
  }
  async paynow() {
    this.modalcontroller.dismiss();
    const modal = await this.modalcontroller.create({
      component: PaynowModalPage,
      cssClass: "paynow"
    });
    return await modal.present();
  }
}
