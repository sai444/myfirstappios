import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notification-detail",
  templateUrl: "./notification-detail.page.html",
  styleUrls: ["./notification-detail.page.scss"]
})
export class NotificationDetailPage implements OnInit {
  data: any = {
    tittle: "Flood and weather warnings in place across England",
    date: "Deceber 20,2019",
    time: "12:47:27 PM"
  };
  constructor() {}

  ngOnInit() {}
}
