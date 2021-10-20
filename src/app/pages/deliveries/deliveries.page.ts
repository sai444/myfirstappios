import { NavController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';



@Component({
  selector: "app-deliveries",
  templateUrl: "./deliveries.page.html",
  styleUrls: ["./deliveries.page.scss"]
})
export class DeliveriesPage implements OnInit {

  apiURL = environment.apiUrl;
  activeTab: string = "past";
  bookingList: any = [
    {
      order_no: "#365 845",
      name: "Francine Diaz",
      address: "14 Eastfied Rd, Peterborough Taunton London, UK",
      rate: 4,
      pickup_date: "26,Dec 2019",
      delivery_time: "11:00 AM",
      img: "../../../assets/image/sender_img.svg"
    },
    {
      order_no: "#365 845",
      name: "Randy Reid",
      address: "14 Eastfied Rd, Peterborough Taunton London, UK",
      rate: 4,
      pickup_date: "27,Dec 2019",
      delivery_time: "02:00 PM",
      img: "../../../assets/image/randy_img.svg"
    }
  ];
  upcoming: any = [
    {
      order_no: "#365 845",
      name: "Francine Diaz",
      address: "14 Eastfied Rd, Peterborough Taunton London, UK",
      rate: 4,
      pickup_date: "26,Dec 2019",
      delivery_time: "11:00 AM",
      img: "../../../assets/image/sender_img.svg"
    }
  ];
  constructor(private nav: NavController ,private http: HttpClient) {}
  alertdataname : any = [];
  alertdataold : any = [];
  username;
  ngOnInit() {
    this.username = localStorage.getItem('username');

    if(this.username){

this.getalertdata();

this.getolddata();



  }}
 
getalertdata(){
  this.http.get(this.apiURL+'alertnew').subscribe(res => {
			this.alertdataname = res;
			// localStorage.setItem('productdetails', JSON.stringify(this.productdata));
      console.log("all alertdataname is", this.alertdataname);
       this.alertdataname.forEach( (element) => {
      console.log("all alertdataname in loop", element.lat);

  });

    });
  
}

resoveaction(id){
  console.log('console.log(id);' ,id);
  this.http.put(this.apiURL+'alertnew/'+id,'id').subscribe(res => {
    this.getalertdata();

  });
console.log(id);

}
getolddata(){
    
  this.http.get(this.apiURL+'alertold').subscribe(res => {
    this.alertdataold = res;
    // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
    console.log("all alertdataname is", this.alertdataold);
     this.alertdataold.forEach( (element) => {
    console.log("all alertdataname in loop", element.lat);

});

  });
}


  chageTab(name) {
    this.activeTab = name;
  }
  viewReceipt() {
    this.nav.navigateForward("/receipt");
  }
}
