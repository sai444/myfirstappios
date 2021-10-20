import { Component, OnInit } from "@angular/core";

import { Platform, NavController, MenuController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Home",
      url: "/home",
    },
    {
      title: "Alerts",
      url: "/deliveries",
    },
    

    {
      title: "Set Location",
      url: "/set-location",
    },
   
    // {
    //   title: "Find Weather ",
    //   url: "/wallet",
    // },
    // {
    //   title: "New",
    //   url: "/view-detail",
    // },
    {
      title: "Emergency Contact",
      url: "/emergence-contact",
    },
    {
      title: "About",
      url: "/coupon",
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nav: NavController,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.nav.navigateRoot("/home");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  username;
  ngOnInit() {
    this.username = localStorage.getItem('username');
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
  support() {
    this.menu.close();
    this.nav.navigateForward("/support");
  }
  logout() {
    this.menu.close();
    localStorage.setItem('username', '');
    this.nav.navigateRoot("/signin");
  }
  editProfile() {
    this.menu.close();
    this.nav.navigateForward("/profile");
  }
}
