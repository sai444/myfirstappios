import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

 

declare const L: any;
@Component({
  selector: "app-set-location",
  templateUrl: "./set-location.page.html",
  styleUrls: ["./set-location.page.scss"]
})
export class SetLocationPage implements OnInit {
  

  apiURL = environment.apiUrl;
   
  lat:any='';
lng:any='';
vib :any = '';
sos : any = '0';
freefall : any = '';

constructor(private geolocation: Geolocation,public loadingController: LoadingController,
  public alertController: AlertController ,public httpClient: HttpClient )
{

}
devicename:string='You Device';
resp :" Click Get Location To Start";
async getLoc()
{
  const loading = await this.loadingController.create({
    message: 'Please wait...',
    });
  await loading.present();

  this.geolocation.getCurrentPosition({maximumAge: 1000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    //alert("r succ"+resp.coords.latitude)
    //alert(JSON.stringify( resp.coords));
    loading.dismiss()
    this.lat=resp.coords.latitude
    this.lng=resp.coords.longitude
    let marker = L.marker([ this.lat , this.lng]).addTo(this.mymap);

    marker.bindPopup(this.devicename).openPopup().addTo(this.mymap);

    this.sendPostRequest( this.lat,this.lng) 
    },er=>{
      //alert("error getting location")
      loading.dismiss()
      this.showLoader('Can not retrieve Location')
    }).catch((error) => {
    //alert('Error getting location'+JSON.stringify(error));
    loading.dismiss()
    this.showLoader('Error getting location - '+JSON.stringify(error))
    });

    
}
mymap : any;

ngOnInit() {

  let latLong = [12.166641 , 77.154548]
    this.mymap = L.map('maps').setView(latLong, 10);
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
    ).addTo(this.mymap);

    // let  center = [12.8650, 77.2094];
    // L.marker(center).addTo(this.mymap);
    this.mymap.whenReady(() => {
      setTimeout(() => {
        this.mymap.invalidateSize();
      }, 3000);
    });

}


async showLoader(msg)
{
  const alert = await this.alertController.create({
    message: msg,
    buttons: ['OK']
  });

  await alert.present();
}
requestOptions
sendPostRequest(tag1,tag2) {
  
  
  let headers = new HttpHeaders({
    'Content-Type': 'application/json','Access-Control-Allow-Origin' :'*',
    'Accept': 'application/json' });
let options = { headers: headers };
  let postData = {
          "name": this.devicename,
          "lat": tag1,
          "long":tag2
  }

  

    let iwstdata = {
      "device_id": this.devicename,
      "latitude": tag1,
      "longitude":tag2,
      "vibration" :this.vib,
      "freefall" : this.freefall,
      "sos":this.sos
}

    this.httpClient.post(this.apiURL+"devicedata", JSON.stringify(iwstdata),
    options )
      .subscribe(data => { 
  
        console.log(data['_body']);
        this.resp = (data['_body']);
        
       }, error => {
        console.log(error);
      });
}






}