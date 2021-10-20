import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.page.html",
  styleUrls: ["./faq.page.scss"]
})
export class FaqPage implements OnInit {
  isshow = 0;
  isdetail = 0;
  constructor() {}

  ngOnInit() {}
  isdata() {
    if (this.isshow == 0) {
      this.isshow = 1;
    } else {
      this.isshow = 0;
    }
  }
  detail() {
    if (this.isdetail == 0) {
      this.isdetail = 1;
    } else {
      this.isdetail = 0;
    }
  }
}
