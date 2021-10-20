import { async } from "@angular/core/testing";
import { ReasonModalPage } from "./../reason-modal/reason-modal.page";
import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ModalController,
  AlertController
} from "@ionic/angular";
import { DeliveryBegunPage } from "../delivery-begun/delivery-begun.page";

@Component({
  selector: "app-accept-order",
  templateUrl: "./accept-order.page.html",
  styleUrls: ["./accept-order.page.scss"]
})
export class AcceptOrderPage implements OnInit {
  public origin: any = {};
  public destination: any = {};
  public Centerlat = 22.298922;
  public Centerlng = 70.802177;
  isconfirm = 0;
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
  public renderOptions = {
    suppressMarkers: true,
    draggable: false
  };
  public markerOptions = {
    origin: {
      icon: "../../../assets/image/source-icon.svg"
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
  constructor(
    private nav: NavController,
    private modalController: ModalController,
    private alertController: AlertController
  ) {
    this.origin = {
      lat: 22.287048,
      lng: 70.799998
    };
    this.destination = {
      lat: 22.269956,
      lng: 70.78884
    };
  }

  ngOnInit() {}
  message() {
    this.nav.navigateForward("/message");
  }
  presentModal() {
    // const modal = await this.modalController.create({
    //   component: DeliveryBegunPage,
    //   cssClass: "begunModal"
    // });
    // modal.onDidDismiss().then(data => {
    //   this.isconfirm = 1;
    // });
    // return await modal.present();
    if (this.isconfirm == 0) {
      this.presentAlert();
      this.markerlat = 22.272696;
      this.markerlng = 70.793133;
    } else {
      this.finisheAlert();
    }
  }
  async reasonModal() {
    const modal = await this.modalController.create({
      component: ReasonModalPage,
      cssClass: "reasonModal"
    });

    return await modal.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: "Your delivery has begun",
      cssClass: "bookedRequest",
      buttons: [
        {
          text: "ok",
          handler: () => {
            this.isconfirm = 1;
          }
        }
      ]
    });

    await alert.present();
  }
  async finisheAlert() {
    const alert = await this.alertController.create({
      message: "Your delivery is finished",
      cssClass: "bookedRequest",
      buttons: [
        {
          text: "ok",
          handler: () => {
            this.nav.navigateForward("/rating");
          }
        }
      ]
    });

    await alert.present();
  }
}
