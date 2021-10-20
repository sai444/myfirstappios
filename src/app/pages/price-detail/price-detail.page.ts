import { AmountModalPage } from "./../amount-modal/amount-modal.page";
import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  ModalController
} from "@ionic/angular";

@Component({
  selector: "app-price-detail",
  templateUrl: "./price-detail.page.html",
  styleUrls: ["./price-detail.page.scss"]
})
export class PriceDetailPage implements OnInit {
  data: any = {
    vehicle: "Cargo Car",
    fare: "40",
    distance: "20",
    time: "-",
    discount: "10",
    total: "50"
  };
  constructor(
    private nav: NavController,
    private modalController: ModalController
  ) {}

  ngOnInit() {}
  cardDetail() {
    this.nav.navigateForward("card-detail");
  }
  cuponDetail() {
    this.nav.navigateForward("coupon");
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AmountModalPage,
      cssClass: "amountModal"
    });
    return await modal.present();
  }
}
