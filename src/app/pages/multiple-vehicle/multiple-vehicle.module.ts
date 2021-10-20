import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { AgmCoreModule } from "@agm/core";
import { MultipleVehiclePageRoutingModule } from "./multiple-vehicle-routing.module";
import { AgmDirectionModule } from "agm-direction";
import { MultipleVehiclePage } from "./multiple-vehicle.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw"
    }),
    AgmDirectionModule,
    IonicModule,
    MultipleVehiclePageRoutingModule
  ],
  declarations: [MultipleVehiclePage]
})
export class MultipleVehiclePageModule {}
