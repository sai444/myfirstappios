import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";
import { AgmCoreModule } from "@agm/core";
import { AddLocationPageRoutingModule } from "./add-location-routing.module";

import { AddLocationPage } from "./add-location.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw"
    }),
    IonicModule,
    AddLocationPageRoutingModule
  ],
  declarations: [AddLocationPage]
})
export class AddLocationPageModule {}
