import { DeliveryBegunPageModule } from "./../delivery-begun/delivery-begun.module";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-on-going-job",
  templateUrl: "./on-going-job.page.html",
  styleUrls: ["./on-going-job.page.scss"]
})
export class OnGoingJobPage implements OnInit {
  data: any = {
    order_num: "#365 845",
    img: "../../../assets/image/sender_img.svg",
    name: "Francine Diaz",
    address: "14 Eastfield Rd, Peterborough, Taunton London. UK",
    rate: 4,
    pickdate: "26,Dec 2019",
    delivery_time: "11:00 AM"
  };
  constructor(private nav: NavController) {}
  viewDetail() {
    this.nav.navigateForward("/view-detail");
  }
  liveTrack() {
    this.nav.navigateForward("/multiple-accept");
  }
  ngOnInit() {}
}
