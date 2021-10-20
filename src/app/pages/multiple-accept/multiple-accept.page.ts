import { async } from "@angular/core/testing";
import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-multiple-accept",
  templateUrl: "./multiple-accept.page.html",
  styleUrls: ["./multiple-accept.page.scss"]
})
export class MultipleAcceptPage implements OnInit {
  public Centerlat = 22.298922;
  public Centerlng = 70.802177;
  public secondorigin: any = {};
  public seconddestination: any = {};
  public origin: any = {};
  public destination: any = {};
  isconfirm = 0;
  changeUser = 0;
  iscode = 0;
  count = 0;
  public styles = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5"
        }
      ]
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161"
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5"
        }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e"
        }
      ]
    }
  ];
  public markerOptions = {
    origin: {
      icon: "../../../assets/image/source-icon.svg"
    },
    destination: {
      icon: "../../../assets/image/destination_icon.svg"
    },
    draggable: true
  };
  public Options = {
    origin: {
      icon: "../../../assets/image/destination_icon.svg"
    },
    destination: {
      icon: "../../../assets/image/destination_icon.svg"
    },
    draggable: true
  };
  iconUrl = "../../../assets/image/scooter_map.svg";
  markerlat = 22.287048;
  markerlng = 70.799998;
  data: any = {
    img: "../../../assets/image_svg/lynch.svg",
    name: "Dennis Lynch",
    number: "MV 007",
    rate: 4.2,
    vehicle: "Audi S8"
  };
  public renderOptions = {
    suppressMarkers: true,
    draggable: false
  };
  constructor(
    private alertController: AlertController,
    private nav: NavController
  ) {
    this.origin = {
      lat: 22.287048,
      lng: 70.799998
    };
    this.destination = {
      lat: 22.269956,
      lng: 70.78884
    };
    this.secondorigin = {
      lat: 22.269956,
      lng: 70.78884
    };
    this.seconddestination = {
      lat: 22.243127,
      lng: 70.769808
    };
  }

  ngOnInit() {}
  async startedService() {
    const alert = await this.alertController.create({
      message: "Delivery to recipient user 1 is started by driver",
      cssClass: "bookedRequest",
      buttons: [
        {
          text: "ok",
          handler: () => {
            if (this.count == 0) {
              this.iscode = 1;
              this.isconfirm = 1;
            } else if (this.count == 1) {
              this.iscode = 0;
              this.changeUser = 1;
              this.markerlat = 22.269956;
              this.markerlng = 70.78884;
            } else if (this.count == 2) {
              this.changeUser = 1;
              this.iscode = 1;
            } else {
              console.log("from else");
              this.recipient();
            }
            this.count++;
          }
        }
      ]
    });

    await alert.present();
  }
  async recipient() {
    const alert = await this.alertController.create({
      message:
        "Delivery to recipient user1 was delivered by driver. you can view report from 'Your Trips'",
      cssClass: "bookedRequest",
      buttons: [
        {
          text: "ok",
          handler: () => {
            this.nav.navigateForward("/receipt");
          }
        }
      ]
    });
    await alert.present();
  }
}
