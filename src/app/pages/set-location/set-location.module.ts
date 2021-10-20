import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { AgmCoreModule } from "@agm/core";
import { SetLocationPageRoutingModule } from "./set-location-routing.module";

import { SetLocationPage } from "./set-location.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw"
    }),
    IonicModule,
    SetLocationPageRoutingModule
  ],
  declarations: [SetLocationPage]
})
export class SetLocationPageModule {}
