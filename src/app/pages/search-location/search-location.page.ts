import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-search-location",
  templateUrl: "./search-location.page.html",
  styleUrls: ["./search-location.page.scss"]
})
export class SearchLocationPage implements OnInit {
  recentLocation: any = [
    "Offices 1 & 2 Denaby Point, Coalpit Rd, Denaby Main Ind Est, Doncaster,UK",
    "Claro Works, Claro Road,Harrogate HG1 4RA, London, UK",
    "20 Cowcross Street, Clerkenwell, EC1M 6DH, London, UK",
    "15 Bennett Precint, Stoke-On-Trent, ST3 2HT, London, UK"
  ];
  constructor(private nav: NavController) {}

  ngOnInit() {}
  addLocation() {
    this.nav.navigateForward("/add-location");
  }
}
