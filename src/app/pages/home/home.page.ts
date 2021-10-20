


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
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
 
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
apiURL = environment.apiUrl;
  constructor(private nav: NavController , private http: HttpClient ,private localNotifications: LocalNotifications) {


  //   this.ports = [
  //     { id: 1, name: 'Tokai' },
  //     { id: 2, name: 'Vladivostok' },
  //     { id: 3, name: 'Navlakhi' }
  // ];
  }


url = this.apiURL+'open/asset-tracking';
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
mymap1 : any;
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
loginmsg; 
userrole;
  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.userrole = localStorage.getItem('userrole');
    this.loginmsg = "Please login to see Data"
    this.czonemap()
    if(this.username){
      this.loginmsg = ""
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
  

    // this.http.get(this.apiURL+'circlezone').subscribe(res => {
    //   this.pzoneports = res;
    //   // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
    //   console.log("all alertdataname is", this.pzoneports);
    
  
    // });
    // setInterval(this.watchPosition(), 5300);
    this.getlatlongs();
  
   
    this.pzonedata();
		this.plantdata();
		this.getalart();

    this.getsetlat = localStorage.getItem('setlat');
    this.getsetlong = localStorage.getItem('setlong');

    if (  this.getsetlong == null){


      
      if (this.userrole=='admin')
      {
        let latLong = [21.166641 , 78.154548]
        this.mymap1 = L.map('mapa').setView(latLong, 5);
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
        ).addTo(this.mymap1);


      }
      else{
      let latLong = [12.166641 , 77.154548]
      this.mymap1 = L.map('mapa').setView(latLong, 16);
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
      ).addTo(this.mymap1);

      }
    }else{


      let latLong = [parseFloat(this.getsetlat) ,parseFloat(this.getsetlong)]
      this.mymap1 = L.map('mapa').setView(latLong, 15);
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
      ).addTo(this.mymap1);
    }

   
    // this.czonemap()
    // let  center = [12.8650, 77.2094];

    // L.marker(center).addTo(this.mymap1);
    // let marker = L.marker(latLong).addTo(this.mymap1);

    // marker.bindPopup('<b>Hi this</b>').openPopup();

    // let marker2 = L.marker([13.0113, 77.5704]).addTo(mymap);
    // marker2.bindPopup('<b>IWST</b>').openPopup();
    // let marker3 = L.marker([13.2113, 77.5704]).addTo(mymap);
    // let marker4 = L.marker([13.3113, 77.804], {icon: this.IconStyleOne}).addTo(mymap);

    this.mymap1.whenReady(() => {
      setTimeout(() => {
        this.mymap1.invalidateSize();
      }, 3000);
    });
  setInterval(() => {
    
    this.manytimetimerun()
    this.checkthealert();
    //  this.czonemap();
    this.pzonedata();
		
    this.checknotifithealert()
    this.http.get(this.apiURL+'alertnewhome').subscribe(res => {
      this.alertdatanew = res;
      // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
      console.log("all alertdataname is", this.alertdatanew);
       this.alertdatanew.forEach( (element) => {
      console.log("all alertdataname in loop", element.lat);

      

  });
  
    });

 
  }, 10000);


  // setInterval(() => {

    

  //   this.http.get(this.apiURL+'deviceinfo').subscribe(res => {
  //     this.ports = res;
  //     // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
  //     console.log("all alertdataname is", this.ports);
  //      this.alertdatanew.forEach( (element) => {
  //     console.log("all alertdataname in loop", element);
  
  // });
  
  //   });
    
  
  

  // }, 3000);




  

  // let circle = L.circle([13.0113, 77.5704], {
  //   color: 'red',
  //   fillColor: '#f03',
  //   fillOpacity: 0.5,
  //   radius: 50
  // }).addTo(this.mymap1);
  // circle.bindPopup('<b>circle</b>').openPopup();

/////////////////////////////////////////////////////////
    // this.czonemap();



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
}
  alertmaindata: any ={};
  single_notification(test) {
    // Schedule a single notification

    this.http.get(this.apiURL+'alert').subscribe(res => {
      this.alertmaindata = res;
      // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
      // console.log("all alertdataname is", this.pzoneports);
    
  
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


  multi_notification() {
    // Schedule multiple notifications
    this.localNotifications.schedule([{
      id: 1,
      text: 'Multi ILocalNotification 1',
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    }, {
      id: 2,
      title: 'Local ILocalNotification Example',
      text: 'Multi ILocalNotification 2',
      icon: 'http://example.com/icon.png'
    }]);
  }
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.czoneport ='';
    this.plantport ='';
   


    console.log('port:***************************************************************************************************', event.value.lat);
    this.mymap1.setView(new L.LatLng(parseFloat(event.value.lat), parseFloat(event.value.long)),18  );
    localStorage.setItem('setlat', event.value.lat);
    localStorage.setItem('setlong', event.value.long);

    //this.mymap1.panTo(new L.LatLng((parseFloat(event.value.lat), (parseFloat(event.value.lat)));
  }

  czoneportChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.plantport ='';
    this.port= '';
    console.log('port:', event.value);
    this.czoneport = event.value.name
    this.mymap1.setView(new L.LatLng(parseFloat(event.value.lat), parseFloat(event.value.long)), 17);
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
    //this.mymap1.setView(new L.LatLng(parseFloat(event.value.lat), parseFloat(event.value.long)),18  );
    this.mymap1.setView(new L.LatLng(parseFloat(event.value.lat), parseFloat(event.value.long)),15, { animation: true }  );
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
  newcountnew;
 
  
  srequestupdate(dataget){
    // this.audio.preload('tabSwitch', 'assets/Red.mp3');
    this.single_notification('New Alert Received      =>  '+dataget)
    
    // Swal.fire( 'new request came',dataget)
    Swal.fire({
      title: 'New Alert Received' +dataget,
      text: dataget,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Acknowledge it!'
      
    }).then((result) => {
      if (result.isConfirmed) {
      this.totalcount.count = this.oldcount.count;
        Swal.fire(

          
          'New request has been acknowledged.',
          'success'
        )
       
      }
    })
    // this.nav.navigateForward("/deliveries");
  }


 
 
  checkthealert(){
    this.http.get(this.apiURL+'alertcount' ).subscribe(res => {
      this.oldcount = res;
      console.log(this.oldcount.count);

    });
    console.log(' free fall this.oldcount.count' ,this.oldcount.count);
    console.log(' free fall this.totalcount.count' ,this.totalcount.count);

this.newcount =  parseInt(this.oldcount.count) -parseInt(this.totalcount.count) ;

this.newcountnew =  parseInt(this.totalcount.count) - parseInt(this.oldcount.count) ;

console.log('this is the new count' ,this.newcount );
console.log('this is the in -- count',this.newcountnew );
 
    if(this.newcount > 0 ){
      this.requestupdate(this.newcount);
      console.log(' free fall this is the new count' ,this.newcount , ' //////', this.oldcount.count , '******',this.totalcount.count);

    }else if(this.newcount < 0)
    {
      console.log('  free fall if    esle  nooooooooooooooooooooooooooo count checknotifithealert' ,this.newcount , ' //////', this.oldcount.count , '******',this.totalcount.count);
      this.totalcount.count = this.oldcount.count;
    }
    else{
      console.log('free fall  else   nooooooooooooooooooooooooooo count checknotifithealert' ,this.newcount , ' //////', this.oldcount.count , '******',this.totalcount.count);
      // this.totalcount.notificationalert = this.oldcount.notificationalert;
    }
  }

  checknotifithealert(){
    this.http.get(this.apiURL+'alertcount' ).subscribe(res => {
      this.notifioldcount = res;
    

    });

   // console.log('this.checknotifithealert new ' ,this.notifioldcount.notificationalert);
   // console.log('this. old' ,this.totalcount.notificationalert);

this.newcountnotifi =  parseInt(this.notifioldcount.notificationalert) - parseInt(this.totalcount.notificationalert) ;

console.log('this is the newcountnotifi count' ,this.newcountnotifi );
    if(this.newcountnotifi > 0 ){
      this.single_notification('New Alert Received      =>  '+this.newcountnotifi)
    
      this.notifirequestupdate(this.newcountnotifi)
      this.totalcount.notificationalert = this.notifioldcount.notificationalert;
    //  console.log('if    nooooooooooooooooooooooooooochecknotifithealert'  ,this.newcountnotifi , ' //////', this.notifioldcount.notificationalert , '******',this.oldcount.notificationalert );
      this.notifioldcount.notificationalert = this.oldcount.notificationalert;

    }
    else if(this.newcountnotifi < 0)
    {
    //  console.log('if    esle  nooooooooooooooooooooooooooo count checknotifithealert' ,this.newcountnotifi , ' //////', this.notifioldcount.notificationalert , '******',this.oldcount.notificationalert );
      this.notifioldcount.notificationalert = this.oldcount.notificationalert;
      this.totalcount.notificationalert = this.oldcount.notificationalert;
    }
    else{
     // console.log('  else   nooooooooooooooooooooooooooo count checknotifithealert'  ,this.newcountnotifi , ' //////', this.notifioldcount.notificationalert , '******',this.oldcount.notificationalert );
      // this.totalcount.notificationalert = this.oldcount.notificationalert;
    }
  }
  requestupdate(dataget){
    // this.audio.preload('tabSwitch', 'assets/Red.mp3');
    this.single_notification('New Alert Received      =>  '+dataget)
    this.single_notification('New Alert Received      =>  '+dataget)
    this.single_notification('New Alert Received      =>  '+dataget)
    
    // Swal.fire( 'new request came',dataget)
    Swal.fire({
      title: 'New Alert Received',
     
      confirmButtonText: `Acknowledge`,
     
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.totalcount.count = this.oldcount.count;
        Swal.fire('Acknowledge!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // this.nav.navigateForward("/deliveries");
  }
  
  ssnotifirequestupdate(dataget){
    // this.audio.preload('tabSwitch', 'assets/Red.mp3');
    this.single_notification('New Alert Received      =>  '+dataget)
    
    // Swal.fire( 'new request came',dataget)
    Swal.fire({
      title: 'New Alert Received' +dataget,
      text: dataget,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Acknowledge it!'
      
    }).then((result) => {
      if (result.isConfirmed) {
        this.totalcount.notificationalert = this.notifioldcount.notificationalert;
        Swal.fire(

          'New request has been acknowledged.',
          'success'
        )
      }
    })
    // this.nav.navigateForward("/deliveries");
  }

  notifirequestupdate(dataget){
    // this.audio.preload('tabSwitch', 'assets/Red.mp3');
    this.single_notification('New Alert Received      =>  '+dataget)
    
    
    // Swal.fire( 'new request came',dataget)
    Swal.fire({
      title: 'New  notification Received',
     
      confirmButtonText: `Acknowledge`,
     
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.totalcount.notificationalert = this.notifioldcount.notificationalert;
        Swal.fire('Acknowledge!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    // this.nav.navigateForward("/deliveries");
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
                this.mymap1.removeLayer(this.mapMarkers[i]);
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
                  })}).bindPopup("Name  : " + locations[i][0] +",  Alart No. : "+ locations[i][4] + ",  Age  : "+ locations[i][5]+ ",  Lat  : "+ locations[i][6]+ ",  Long  : "+ locations[i][7]).openPopup().addTo(this.mymap1);
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
    onmap() {
    var counts = 1
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    console.log('this is a loop of live data' , this.livedata);
    this.livedata.forEach(element => {


      let markeradd ;

      console.log("demolt",markeradd);
      this.latlongmark = [parseFloat(element.lat),parseFloat(element.long)]

      markeradd = L.marker([parseFloat(element.lat),parseFloat(element.long)] , {icon: L.icon({
        iconUrl: './../../../assets/image/loc2.png',
        iconSize:     [25, 55], // size of the icon
        shadowSize:   [25, 50], // size of the shadow
        iconAnchor:   [10, 50], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      })}).bindPopup(element.device).openPopup().addTo(this.mymap1);
      // marker;
      counts =  counts + 1;
  
  });


  }


  getDatatotalcount() {
    this.http.get(this.apiURL+'alertcount' ).subscribe(res => {
      this.totalcount = res;
      console.log(this.totalcount.count);

    });
  }
  czonemap(){
    let payload = {
      "username": this.username
    }
          this.http.post(this.apiURL+'circlezoneuser', payload).subscribe(
            res => {
              this.czoneports =res
   
        this.czonedataname = res;
        // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
        console.log("all czonedataname is", this.czonedataname);
        this.czonedataname.forEach( (element) => {
        console.log("all czonedataname in loop", element.lat);


        let circle = L.circle([parseFloat(element.lat),parseFloat(element.long)], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.2,
          radius: parseFloat(element.radius)
        }).bindPopup(element.name).openPopup().addTo(this.mymap1);




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
  pzonedata() {
    // let payload = {
    //   "username": this.username
    // }
    //       this.http.post(this.apiURL+'polygonzoneuser', payload).subscribe(
    //         res => {
    //           this.pzoneports = res
    //   this.pzonedataname = res;
    //   // localStorage.setItem('productdetails', JSON.stringify(this.productdata));
    //   console.log("all circlezone", this.pzonedataname);

    // //   this.pzonedataname.forEach( (element) => {
    // //     console.log("all czonedataname in loop", element.lat);

    // //     let mainten = L.polyline([[parseFloat(element.lat1), parseFloat(element.long1)],
    // //       [parseFloat(element.lat2), parseFloat(element.long2)],

    // //       [parseFloat(element.lat3), parseFloat(element.long3)],
    // //       [parseFloat(element.lat4), parseFloat(element.long4)],
    // //       [parseFloat(element.lat5), parseFloat(element.long5)],
    // //       [parseFloat(element.lat6), parseFloat(element.long6)],
    // //     ], {
    // //       color: 'blue',  fillColor: '#f03',}).bindPopup(element.name).openPopup().addTo(this.mymap1);
    // // });

    // });
  }
  postData() {
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
//     this.http.get(this.apiURL+'alertcount' ).subscribe(res => {
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
