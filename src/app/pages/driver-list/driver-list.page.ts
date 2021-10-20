import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-driver-list",
  templateUrl: "./driver-list.page.html",
  styleUrls: ["./driver-list.page.scss"]
})
export class DriverListPage implements OnInit {
  driverlist: any = [
    {
      img: "../../../assets/image_svg/patrick.svg",
      name: "Patrick Palmer",
      price: "02/km",
      away: "1.2km",
      service_type: "Single delivery",
      category: "new",
      rate: 4
    },
    {
      img: "../../../assets/image_svg/justin.svg",
      name: "Jeremy Estrada",
      price: "02/km",
      away: "0.5km",
      service_type: "Multiple delivery",
      category: "top rated",
      rate: 5
    },
    {
      img: "../../../assets/image_svg/nancy_driver.svg",
      name: "Nancy Bailey",
      price: "03/km",
      away: "1.4km",
      service_type: "Single delivery",
      category: "",
      rate: 4
    },
    {
      img: "../../../assets/image_svg/jose.svg",
      name: "Jose Barnett",
      price: "01/km",
      away: "1.8km",
      service_type: "Multiple delivery",
      category: "cheap",
      rate: 3
    },
    {
      img: "../../../assets/image_svg/alan.svg",
      name: "Alan Wade",
      price: "02/km",
      away: "0.2",
      service_type: "Multiple delivery",
      category: "",
      rate: 5
    },
    {
      img: "../../../assets/image_svg/mary.svg",
      name: "Mary Bailey",
      price: "02/km",
      away: "0.8km",
      service_type: "Single delivery",
      category: "top rated",
      rate: 5
    }
  ];
  constructor(private nav: NavController) {}

  ngOnInit() {}
  selectDelivery() {
    this.nav.navigateForward("/select-delivery");
  }
}
