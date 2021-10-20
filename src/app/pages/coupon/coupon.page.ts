import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-coupon",
  templateUrl: "./coupon.page.html",
  styleUrls: ["./coupon.page.scss"]
})
export class CouponPage implements OnInit {
  constructor(private nav: NavController) {}
  coupon: any = [
    {
      detail: "Main App - 10/5/2021",
      discount: "HT",
      code: "V-1.0"
    },
 
  ];
  ngOnInit() {}
  applyCoupon() {
    this.nav.navigateForward("/fare-detail");
  }
}
