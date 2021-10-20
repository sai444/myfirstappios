import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AcceptOrderPageRoutingModule } from "./accept-order-routing.module";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";
import { AcceptOrderPage } from "./accept-order.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw"
    }),
    AgmDirectionModule,
    IonicModule,
    IonicModule,
    AcceptOrderPageRoutingModule
  ],
  declarations: [AcceptOrderPage]
})
export class AcceptOrderPageModule {}
