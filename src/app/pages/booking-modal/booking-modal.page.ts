import {
  ModalController,
  AlertController,
  NavController
} from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-booking-modal",
  templateUrl: "./booking-modal.page.html",
  styleUrls: ["./booking-modal.page.scss"]
})
export class BookingModalPage implements OnInit {
  constructor(
    private modal: ModalController,
    private alertController: AlertController,
    private nav: NavController
  ) {}

  ngOnInit() {}
  async Bookedrequested() {
    this.modal.dismiss();
    const alert = await this.alertController.create({
      message: "Dennis email has arrived at your location for job #589236",
      cssClass: "bookedRequest",
      buttons: [
        {
          text: "ok",
          handler: () => {
            this.nav.navigateForward("multiple-accept");
          }
        }
      ]
    });

    await alert.present();
  }
}
