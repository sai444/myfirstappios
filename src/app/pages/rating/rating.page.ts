import { SuccessModalPage } from "./../success-modal/success-modal.page";
import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.page.html",
  styleUrls: ["./rating.page.scss"]
})
export class RatingPage implements OnInit {
  rate = 3;
  data: any = {
    total: "50",
    pickupdate: "11,Nov 2019",
    deliverydate: "11,Nov 2019",
    pickuptime: "11:00 AM",
    deliverytime: "01:25 PM",
    pickupUser: "Francine Diaz",
    pickaddress: "Orchard view, woodhill, Taunton London. UK",
    dropuser: "Justine Miller",
    dropaddress: "unit 22, City Business Centre, 6, Brighton Rd, London. UK",
    fare: "40",
    distance: "20",
    time: "-",
    discount: "10"
  };
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: SuccessModalPage,
      cssClass: "success-modal"
    });
    return await modal.present();
  }
}
