import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fare-detail",
  templateUrl: "./fare-detail.page.html",
  styleUrls: ["./fare-detail.page.scss"]
})
export class FareDetailPage implements OnInit {
  data: any = {
    name: "Cargo Car",
    detail:
      "This fare is based on estimation this may very during trip and final fare",
    capacity: "--",
    fare: "42",
    distance: "20",
    time: "-",
    discount: "10",
    total: "50"
  };
  constructor() {}

  ngOnInit() {}
}
