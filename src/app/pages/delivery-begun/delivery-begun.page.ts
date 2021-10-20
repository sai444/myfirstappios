import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-delivery-begun",
  templateUrl: "./delivery-begun.page.html",
  styleUrls: ["./delivery-begun.page.scss"]
})
export class DeliveryBegunPage implements OnInit {
  constructor(private modal: ModalController) {}

  ngOnInit() {}
  dismissmodal() {
    this.modal.dismiss();
  }
}
