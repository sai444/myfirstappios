import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  NavController
} from "@ionic/angular";

@Component({
  selector: "app-reason-modal",
  templateUrl: "./reason-modal.page.html",
  styleUrls: ["./reason-modal.page.scss"]
})
export class ReasonModalPage implements OnInit {
  reason: any = [
    "Cheaper alternative available for lesser price.",
    "Driver did not found your mentioned location?",
    "Driver Denied to deliver package",
    "Other"
  ];
  constructor(
    private alertController: AlertController,
    private modal: ModalController,
    private nav: NavController
  ) {}

  ngOnInit() {}
  async presentAlert() {
    this.modal.dismiss();
    const alert = await this.alertController.create({
      message: "Your delivery has been successfully cancelled",
      cssClass: "bookedRequest",
      buttons: [
        {
          text: "ok",
          handler: () => {
            this.nav.navigateRoot("/home");
          }
        }
      ]
    });

    await alert.present();
  }
}
