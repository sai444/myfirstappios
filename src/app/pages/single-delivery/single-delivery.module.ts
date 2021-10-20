import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { AgmDirectionModule } from "agm-direction";
import { SingleDeliveryPageRoutingModule } from "./single-delivery-routing.module";
import { AgmCoreModule } from "@agm/core";
import { SingleDeliveryPage } from "./single-delivery.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw"
    }),
    AgmDirectionModule,
    IonicModule,
    SingleDeliveryPageRoutingModule
  ],
  declarations: [SingleDeliveryPage]
})
export class SingleDeliveryPageModule {}
