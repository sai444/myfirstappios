import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.page.html",
  styleUrls: ["./notification.page.scss"]
})
export class NotificationPage implements OnInit {
  activeTab: string = "all";
  data: any = {
    all: [
      {
        img: "../../../assets/image/notificaion_flood.svg",
        tittle: "Flood and weather warnings in place across England",
        about:
          "The warnings are in place across southern and eastern Englad, the Midlands and Yorkshire.",
        time: "BBC News-09-Oct-2019"
      },
      {
        img: "../../../assets/image/no_ukapprove.svg",
        tittle: "UK approves 4bn takeover of defense company Cobham",
        about:
          "The government has approved a US private equity firm's takeover of UK defense and",
        time: "BBC News-09-Oct-2019"
      },
      {
        img: "../../../assets/image/no_kyle.svg",
        tittle: "Flood and weather warnings in place across England",
        about:
          "The warnings are in place across southern and eastern Englad, the Midlands and Yorkshire.",
        time: "05 Sec Ago"
      }
    ],
    app: [
      {
        img: "../../../assets/image/no_kyle.svg",
        tittle: "Flood and weather warnings in place across England",
        about:
          "The warnings are in place across southern and eastern Englad, the Midlands and Yorkshire.",
        time: "05 Sec Ago"
      }
    ],
    news: [
      {
        img: "../../../assets/image/notificaion_flood.svg",
        tittle: "Flood and weather warnings in place across England",
        about:
          "The warnings are in place across southern and eastern Englad, the Midlands and Yorkshire.",
        time: "BBC News-09-Oct-2019"
      },
      {
        img: "../../../assets/image/no_ukapprove.svg",
        tittle: "UK approves 4bn takeover of defense company Cobham",
        about:
          "The government has approved a US private equity firm's takeover of UK defense and",
        time: "BBC News-09-Oct-2019"
      }
    ]
  };
  constructor(private nav: NavController) {}

  ngOnInit() {}
  chageTab(name) {
    this.activeTab = name;
  }
  notificationDetail() {
    this.nav.navigateForward("/notification-detail");
  }
}
