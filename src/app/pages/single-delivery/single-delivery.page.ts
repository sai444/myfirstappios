import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-single-delivery",
  templateUrl: "./single-delivery.page.html",
  styleUrls: ["./single-delivery.page.scss"]
})
export class SingleDeliveryPage implements OnInit {
  public origin: any = {};
  public destination: any = {};
  public Centerlat = 22.298922;
  public Centerlng = 70.802177;
  public secondorigin: any = {};
  public seconddestination: any = {};
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
      icon: "../../../assets/image/scooter_map.svg"
    },
    destination: {
      icon: "../../../assets/image/source-icon.svg"
    },
    draggable: true
  };
  public Options = {
    origin: {
      icon: "../../../assets/image/source-icon.svg"
    },
    destination: {
      icon: "../../../assets/image/destination_icon.svg"
    },
    draggable: true
  };

  scooter = 0;
  cargo = 1;
  mini = 0;

  constructor(private nav: NavController) {
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
  cardDetail() {
    this.nav.navigateForward("/card-detail");
  }
  couponDetail() {
    this.nav.navigateForward("/coupon");
  }
  deliveryDetail() {
    this.nav.navigateForward("/delivery-detail");
  }
  fareDetail() {
    this.nav.navigateForward("/fare-detail");
  }
}
