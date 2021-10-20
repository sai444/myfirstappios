import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-delivery-detail",
  templateUrl: "./delivery-detail.page.html",
  styleUrls: ["./delivery-detail.page.scss"]
})
export class DeliveryDetailPage implements OnInit {
  isdetail = 0;
  constructor(private nav: NavController) {}

  ngOnInit() {}
  detail() {
    if (this.isdetail == 0) {
      this.isdetail = 1;
    } else {
      this.isdetail = 0;
    }
  }
  acceptOrder() {
    this.nav.navigateForward("/accept-order");
  }
}
