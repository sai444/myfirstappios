import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mdelivery-detail",
  templateUrl: "./mdelivery-detail.page.html",
  styleUrls: ["./mdelivery-detail.page.scss"]
})
export class MdeliveryDetailPage implements OnInit {
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
    this.nav.navigateForward("/search-location");
  }
}
