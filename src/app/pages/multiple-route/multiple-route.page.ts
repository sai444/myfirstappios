import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-multiple-route",
  templateUrl: "./multiple-route.page.html",
  styleUrls: ["./multiple-route.page.scss"]
})
export class MultipleRoutePage implements OnInit {
  public Centerlat = 22.298922;
  public Centerlng = 70.802177;
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
  public origin: any = {};
  public destination: any = {};
  public renderOptions = {
    suppressMarkers: true,
    draggable: false
  };
  public secondorigin: any = {};
  public seconddestination: any = {};
  public thirdorigin: any = {};
  public thirddestination: any = {};
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
  public moptions = {
    origin: {
      icon: "../../../assets/image/destination_icon.svg"
    },
    destination: {
      icon: "../../../assets/image/destination_icon.svg"
    },
    draggable: true
  };
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
    this.thirdorigin = {
      lat: 22.243127,
      lng: 70.769808
    };
    this.thirddestination = {
      lat: 22.222641,
      lng: 70.761814
    };
  }

  ngOnInit() {}
  deliveryDetail() {
    this.nav.navigateForward("mdelivery-detail");
  }
  priceDetail() {
    this.nav.navigateForward("price-detail");
  }
}
