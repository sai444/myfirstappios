


import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { IonicSelectableComponent } from 'ionic-selectable';
import Swal from "sweetalert2";
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { environment } from '../../../environments/environment';



class productdataname {
  public id: number;
  public name: string;
}

class Port {
  public id: number;
  public name: string;
}
declare const L: any;
@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.page.html",
  styleUrls: ["./wallet.page.scss"]
})
export class WalletPage implements OnInit {
  apiURL = environment.apiUrl;
  transaction : 'it';
  currnetParcel: any = [
    {
      name: "Dennis Lynch",
      phone: "+44 365 987 1268",
      payment: "Cash",
      img: "../../../assets/image_svg/user_dennish.svg"
    },
    {
      name: "Jacob Mendoza",
      phone: "+44 254 983 2678",
      payment: "Cash",
      img: "../../../assets/image_svg/jacob.svg"
    }
  ];
  nearbyDriver: any = [
    {
      price: "02/km",
      away: "1.2km",
      img: "../../../assets/image_svg/patrick.svg",
      name: "Patrick Palmer",
      service_type: "Single delivery",
      rate: 4,
      category: "new"
    },
    {
      price: "02/km",
      away: "0.5km",
      img: "../../../assets/image_svg/justin.svg",
      name: "Justin Griffin",
      service_type: "Multiple delivery",
      rate: 5,
      category: "top rated"
    }
  ];
  contact: any = [
    {
      name: "Pratrick Palmer",
      address: "Plot 1 Burford House, Woodland way, London , Uk",
      img: "../../../assets/image_svg/contack_patrick.svg"
    },
    {
      name: "Pratrick Palmer",
      address: "Plot 1 Burford House, Woodland way, London , Uk",
      img: "../../../assets/image_svg/contact_jenifer.svg"
    }
  ];

livelatlong : any= {};

  title = 'locationApp';
ploi1 = [ [12.9716, 77.5946],
[12.5000, 77.8946],
[12.7016, 77.9946 ]]
src1="assets/images/loc1.png";
src2="./assets/images/loc2.png"

private tag1 = ("./assets/images/loc2.png");

IconStyleOne = L.icon({
  iconUrl: './assets/images/loc1.png',
  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
IconStyleTwo = L.icon({
  iconUrl: './assets/images/loc2.png',
  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
greenIcon = L.icon({
  iconUrl: 'leaf-green.png',
  shadowUrl: 'leaf-shadow.png',

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
 coords3 = [
  13.2113, 77.5704,
  13.2113, 78.5704,
  13.2113, 79.5704,
];
selectedting;
demolt= [

  {"lat": 12.120000 ,
   "long": 76.680000,
  "icon": "./assets/images/loc1.png",
"name":"mysour" },
  {"lat": 	24.879999 ,
   "long": 74.629997,
  "icon": "./assets/images/loc1.png",
"name":"Chittorgarh" },
  {"lat": 16.994444 ,
   "long": 	73.530003,
  "icon": "./assets/images/loc2.png",
"name":"Ratnagiri" },
  {"lat":  24.794500,
   "long": 73.055000,
  "icon": "./assets/images/loc2.png",
"name":"Goregaon" },
  {"lat": 21.250000 ,
   "long": 	81.629997,
  "icon": "./assets/images/loc1.png",
"name":"Raipur" }
]

  constructor(private nav: NavController , private http: HttpClient ,private localNotifications: LocalNotifications) {


  //   this.ports = [
  //     { id: 1, name: 'Tokai' },
  //     { id: 2, name: 'Vladivostok' },
  //     { id: 3, name: 'Navlakhi' }
  // ];
  }


url : 'http://14.139.158.210:8085/open/asset-tracking';
payloads : any = {};
markert;
mainurl;
livedata: any = {};
centerlatlong: any = {};

getlatlongs() {
  // this.livedata = {}
  this.http.get(this.apiURL+'deviceinfo').subscribe(res => {
    this.livedata = res;
    // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
    console.log("all live data", this.livedata);
  });

}
alartnew: any = {};
getalart() {
  this.http.get(this.apiURL+'alertnew').subscribe(res => {
    this.alartnew = res;
    // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
    console.log("all getalart", this.alartnew);
  });

}
pzonedataname: any = {};
czonedataname: any;
mymap2 : any;
alertdatanew : any = [];
oldcount : any;
newcount : any;
ports;
port: any ={};
czoneport: any ={};
plantport: any ={};
czoneports ;
pzoneports;
plantports;
getsetlat;
getsetlong;
username;
  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.http.get(this.apiURL+'alertnewhome').subscribe(res => {
      this.alertdatanew = res;
      // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
      console.log("all alertdataname is", this.alertdatanew);
       this.alertdatanew.forEach( (element) => {
      console.log("all alertdataname in loop", element.lat);
  
  });
  
    });


    


    this.http.get(this.apiURL+'plant').subscribe(res => {
      this.plantports = res;
      // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
      console.log("all alertdataname is", this.ports);
    
  
    });
    this.http.get(this.apiURL+'circlezone').subscribe(res => {
      this.czoneports = res;
      // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
      console.log("all alertdataname is", this.czoneports);
      
    });

    this.http.get(this.apiURL+'circlezone').subscribe(res => {
      this.pzoneports = res;
      // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
      console.log("all alertdataname is", this.pzoneports);
    
  
    });
    // setInterval(this.watchPosition(), 5300);
    this.getlatlongs();
  
	
		this.plantdata();
		this.getalart();

    this.getsetlat = localStorage.getItem('setlat');
    this.getsetlong = localStorage.getItem('setlong');

 
      let latLong = [12.166641 , 77.154548]
      this.mymap2 = L.map('map2').setView(latLong, 16);
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 25,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(this.mymap2);
     

  
   

    let  center = [12.8650, 77.2094];
    // L.marker(center).addTo(this.mymap2);
    // let marker = L.marker(latLong).addTo(this.mymap2);

    // marker.bindPopup('<b>Hi this</b>').openPopup();

    // let marker2 = L.marker([13.0113, 77.5704]).addTo(mymap);
    // marker2.bindPopup('<b>IWST</b>').openPopup();
    // let marker3 = L.marker([13.2113, 77.5704]).addTo(mymap);
    // let marker4 = L.marker([13.3113, 77.804], {icon: this.IconStyleOne}).addTo(mymap);


  setInterval(() => {

    this.manytimetimerun()
  
   
    this.http.get(this.apiURL+'deviceinfo').subscribe(res => {
      this.ports = res;
      // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
      console.log("all alertdataname is", this.ports);
       this.alertdatanew.forEach( (element) => {
      console.log("all alertdataname in loop", element);
  
  });
  
    });
    
    
  
 
  }, 15000);


 




  

  // let circle = L.circle([13.0113, 77.5704], {
  //   color: 'red',
  //   fillColor: '#f03',
  //   fillOpacity: 0.5,
  //   radius: 50
  // }).addTo(this.mymap2);
  // circle.bindPopup('<b>circle</b>').openPopup();

/////////////////////////////////////////////////////////
    this.czonemap();



////////////////////////////////////////////////////////

		this.centerlatlong = {
			"lat": 12.664877,
			"Long": 77.15555,
		}



		navigator.geolocation.getCurrentPosition((position) => {

			const coords = position.coords;
			const latLong = [12.15555, 77.333214];
			console.log(
				`lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
			);


		});




		// setInterval(() => { this.getlaylong(); }, 5000);
		/////////////////////////////////////////////////////////////////////////////////////////////////////
		// if (!navigator.geolocation) {
		//   console.log('location is not supported');
		// }

		this.watchPosition();


		//////////////////////////////////////////////////////////////////////////////////////
    this.getDatatotalcount();


  }
  alertmaindata: any ={};
  single_notification(test) {
    // Schedule a single notification

    this.http.get(this.apiURL+'alert').subscribe(res => {
      this.alertmaindata = res;
      // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
      console.log("all alertdataname is", this.pzoneports);
    
  
    });
    var alertmain = [];
    this.alertmaindata.forEach(element => {
      alertmain.push({
        id: element.id,
        text: 'Alert Message : '+element.alertmsg,
        sound: 'file://assets/Red.mp3',
        data: { secret: 'key_data' }
      });


console.log('alertmain    ' ,element.id);



    });


    this.localNotifications.schedule(alertmain);
    // navigator.vibrate(1500);
    
  }

  datapat : any =  {};
  datacem :  any = {};
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.czoneport ='';
    this.plantport ='';
   


    console.log('port:***************************************************************************************************', event.value.lat);
    this.mymap2.setView(new L.LatLng(parseFloat(event.value.lat), parseFloat(event.value.long)),18  );
    localStorage.setItem('setlat', event.value.lat);
    localStorage.setItem('setlong', event.value.long);

    this.datapat  = {
      "lat": event.value.lat,
      "long" : event.value.long

    }

      this.http.post(this.apiURL+'weather', this.datapat ).subscribe(
        res => {
          this.datacem = res
          console.log('res  http://iotmax.in:5300/weather ====================================', this.datacem);
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
        }
      );
  
   
    //this.mymap2.panTo(new L.LatLng((parseFloat(event.value.lat), (parseFloat(event.value.lat)));
  }

  czoneportChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.plantport ='';
    this.port= '';
    console.log('port:', event.value);
    this.czoneport = event.value.name
    this.mymap2.setView(new L.LatLng(parseFloat(event.value.lat), parseFloat(event.value.long)), 19);
    localStorage.setItem('setlat', event.value.lat);
    localStorage.setItem('setlong', event.value.long);
  }

  plantportChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.czoneport ='';
    this.port= '';
    console.log('port:', event.value);
    this.plantport = event.value.name
    //this.mymap2.setView(new L.LatLng(parseFloat(event.value.lat), parseFloat(event.value.long)),18  );
    this.mymap2.setView(new L.LatLng(parseFloat(event.value.lat), parseFloat(event.value.long)),15, { animation: true }  );
    localStorage.setItem('setlat', event.value.lat);
    localStorage.setItem('setlong', event.value.long);
  }


  notifioldcount : any;
  newcountnotifi;
 


  delayed_notification() {
    // Schedule delayed notification
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: { at: new Date(new Date().getTime() + 2) },
      led: 'FF0000',
      sound: null
    });
  }
  isItemAvailable = false;
  items = [];

  initializeItems(){
      this.items = ["Ram","gopi", "dravid"];
  }

  getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
          this.isItemAvailable = true;
          this.items = this.items.filter((item) => {
              return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
      } else {
          this.isItemAvailable = false;
      }
  }




 





 
  mapMarkers = [];

 
  manytimetimerun(){
     

    let payload = {
      "username": this.username
    }
          this.http.post(this.apiURL+'deviceinfo', payload).subscribe(
            res => {
              this.ports = res;
              this.livedata = res;
              // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
              console.log("all live data", this.livedata);
            let count = 1
            var locations = [];
      
            this.livedata.forEach(element => {
              // this.mark = L.marker([parseFloat(element.lat),parseFloat(element.long)]).bindPopup(this.mark).addTo(this.mymap1);
      
              var vals = [element.device, element.lat, element.long,element.icon,element.alerts ,element.treeage ,element.lat,element.long];
      
              locations.push(vals)
      
              for(var i = 0; i < this.mapMarkers.length; i++){
                this.mymap2.removeLayer(this.mapMarkers[i]);
              }
      
              for (var i = 0; i < locations.length; i++) {
                var marker = new L.marker([locations[i][1], locations[i][2]]
                , {icon: L.icon({
                    iconUrl: './assets/image/'+locations[i][3],
                    iconSize:     [30, 70], // size of the icon
                    shadowSize:   [50, 64], // size of the shadow
                    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 62],  // the same for the shadow
                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                  })}).bindPopup("Name  : " + locations[i][0] +",  Alart No. : "+ locations[i][4] + ",  Age  : "+ locations[i][5]+ ",  Lat  : "+ locations[i][6]+ ",  Long  : "+ locations[i][7]).openPopup().addTo(this.mymap2);
                this.mapMarkers.push(marker);
      
              }
      
      
      
            });
      
          },
            (err: HttpErrorResponse) => {
              console.log(err.error);
              console.log(err.name);
              console.log(err.message);
              console.log(err.status);
            }
          );


    }
  latlongmark ;
  totalcount;
 


  getDatatotalcount() {
    this.http.get(this.apiURL+'alertcount' ).subscribe(res => {
      this.totalcount = res;
      console.log(this.totalcount.count);

    });
  }
  czonemap(){
    this.http.get(this.apiURL+'circlezone').subscribe(res => {
        this.czonedataname = res;
        // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
        console.log("all czonedataname is", this.czonedataname);
        this.czonedataname.forEach( (element) => {
        console.log("all czonedataname in loop", element.lat);


        let circle = L.circle([parseFloat(element.lat),parseFloat(element.long)], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: parseFloat(element.radius)
        }).bindPopup(element.name).openPopup().addTo(this.mymap2);




    });

      });


  }

	productdataname: any = {};

  plantdata() {
		this.http.get(this.apiURL+'plant').subscribe(res => {
			this.productdataname = res;

			// localStorage.setItem('productdetails', JSON.stringify(this.productdata));
			console.log("all names", this.productdataname);
		});
	}

	keydata1 = 'name'
	keydata2 = 'name'
 Data() {
    this.http.post(this.url, this.payloads).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }
  onChangeSearch(value) {
    console.log('onChangeSearch   ', value);

    this.centerlatlong = {
      "lat": value.lat,
      "Long": value.long,
    }

  }

  onFocused(value) {

    console.log('value   ', value);
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }

  driverList() {
    this.nav.navigateForward("/deliveries");
  }
  contactList() {
    this.nav.navigateForward("/contact-list");
  }
  delivery() {
    this.nav.navigateForward("/select-delivery");
  }



  
//   checknotifithealert(){
//     this.http.get('http://iotmax.in:5300/alertcount' ).subscribe(res => {
//       this.notifioldcount = res;
    

//     });
//     console.log('this.oldcount.count' ,this.notifioldcount.notificationalert);
//     console.log('this.totalcount.count' ,this.totalcount.notificationalert);

// this.newcountnotifi =  parseInt(this.oldcount.count) -parseInt(this.totalcount.notificationalert) ;

// console.log('this is the newcountnotifi count' ,this.newcountnotifi );
//     if(this.newcountnotifi > 0 ){
//       this.notifirequestupdate(this.newcountnotifi)
//       this.notifirequestupdate(this.newcountnotifi)
//       this.notifirequestupdate(this.newcountnotifi)
//       console.log('this is the new count' ,this.newcountnotifi );
//       this.totalcount.count = this.oldcount.notificationalert;

//     }
//   }
  
  
  // notifirequestupdate(dataget){
  //   // this.audio.preload('tabSwitch', 'assets/Red.mp3');
  //   this.single_notification('New Alert Received      =>  '+dataget)
    
  //   // Swal.fire( 'new request came',dataget)
  //   Swal.fire({
  //     title: 'New Alert Received' +dataget,
  //     text: dataget,
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Acknowledge it!'
      
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //     this.totalcount.count = this.oldcount.count;
  //       Swal.fire(

  //         'New request has been acknowledged.',
  //         'success'
  //       )
  //     }
  //   })
  // }
}
