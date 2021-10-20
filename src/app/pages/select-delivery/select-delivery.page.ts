import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-select-delivery",
  templateUrl: "./select-delivery.page.html",
  styleUrls: ["./select-delivery.page.scss"]
})
export class SelectDeliveryPage implements OnInit {
  servicelist: any = [
    {
      img: "../../../assets/image/vehicle.png",
      name: "Vehical",
      service_detail: "Class A"
    },
    {
      img: "../../../assets/image/Human.png",
      name: "Human",
      service_detail: "Class A"
    }
  ];
  constructor(private nav: NavController) {}

  ngOnInit() {}
  singleDelivery() {
    localStorage.setItem("delivery", "single");
    this.nav.navigateForward("/home");
  }
  multipleDelivery() {
    localStorage.setItem("delivery", "multiple");
    this.nav.navigateForward("/home");
  }
}
