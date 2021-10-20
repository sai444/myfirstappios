import { BookingModalPageModule } from "./pages/booking-modal/booking-modal.module";

import { PaynowModalPageModule } from "./pages/paynow-modal/paynow-modal.module";
import { AmountModalPageModule } from "./pages/amount-modal/amount-modal.module";
import { ReasonModalPageModule } from "./pages/reason-modal/reason-modal.module";
import { SuccessModalPageModule } from "./pages/success-modal/success-modal.module";
import { DeliveryBegunPageModule } from "./pages/delivery-begun/delivery-begun.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { CallNumber } from '@ionic-native/call-number/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    DeliveryBegunPageModule,
    SuccessModalPageModule,
    ReasonModalPageModule,
    AmountModalPageModule,
    PaynowModalPageModule,
    BookingModalPageModule,
    AppRoutingModule
  ],
  providers: [
    Geolocation,
    StatusBar,
    CallNumber,
    LocalNotifications,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
