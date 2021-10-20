import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MultipleAcceptPageRoutingModule } from "./multiple-accept-routing.module";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";
import { MultipleAcceptPage } from "./multiple-accept.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw"
    }),
    AgmDirectionModule,
    IonicModule,
    MultipleAcceptPageRoutingModule
  ],
  declarations: [MultipleAcceptPage]
})
export class MultipleAcceptPageModule {}
