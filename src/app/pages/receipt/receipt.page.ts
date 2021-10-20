import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-receipt",
  templateUrl: "./receipt.page.html",
  styleUrls: ["./receipt.page.scss"]
})
export class ReceiptPage implements OnInit {
  reviewRate = 1;
  data: any = {
    name: "Francine Diaz",
    num: "+44 369 258 1475",
    rate: 4,
    price: "$50",
    img: "../../../assets/image/sender_img.svg",
    oreder_no: "#365 476",
    pickup_date: "26,Dec 2019",
    delivery_time: "11:00 AM",
    sender_address: "14 Eastfied Rd, Peterborough, Taunton London, Uk",
    recipient: [
      {
        name: "User 1 Name",
        num: "+44 236 698 5412",
        address: "24 The Stow, Harlow, London",
        type: "Food Parcel",
        instruction: "Parcel Don't Spill",
        status: "Finished"
      },
      {
        name: "User 1 Name",
        num: "+44 236 698 5412",
        address: "30 The Stow, Harlow, London",
        type: "Envelope",
        instruction: "drop envelope on time",
        status: "Finished"
      }
    ],
    fare: "40",
    distance: "20",
    time: "-",
    discount: "10",
    total: "50"
  };
  constructor(
    private alertController: AlertController,
    private nav: NavController
  ) {}

  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      message: "Your Ratings has been Successfully Submitted",
      cssClass: "bookedRequest",
      buttons: [
        {
          text: "ok",
          handler: () => {
            this.nav.navigateForward("/on-going-job");
          }
        }
      ]
    });

    await alert.present();
  }
}
