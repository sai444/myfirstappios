import { async } from "@angular/core/testing";
import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  NavController,
  AlertController
} from "@ionic/angular";
import { BookingModalPage } from "../booking-modal/booking-modal.page";

@Component({
  selector: "app-paynow-modal",
  templateUrl: "./paynow-modal.page.html",
  styleUrls: ["./paynow-modal.page.scss"]
})
export class PaynowModalPage implements OnInit {
  constructor(
    private modal: ModalController,
    private nav: NavController,
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {}
  changeCard() {
    this.modal.dismiss();
    this.nav.navigateForward("card-detail");
  }
  cancel() {
    this.modal.dismiss();
  }
  confirm() {}
  async presentAlert() {
    this.modal.dismiss();
    const alert = await this.alertController.create({
      message: "Your amount pay successfully",
      cssClass: "successAlert",
      buttons: [
        {
          text: "ok",
          handler: () => {
            this.BookedModal();
          }
        }
      ]
    });

    await alert.present();
  }

  async BookedModal() {
    const modal = await this.modalController.create({
      component: BookingModalPage,
      cssClass: "Bookingmodal"
    });
    return await modal.present();
  }
}
