import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  
})




export class LocationComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;
    marker: google.maps.Marker;
  constructor() { 

  }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(47.4803565, -122.2063973),
      zoom:20,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
     
      
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    // var marker = new google.maps.Marker({
    //   position: {lat: 47.4803565, lng: -122.2063973},
    //   map: this.map,
    //   title: 'Hot Yoga Renton!',
       
    // });
  }
   }
  
  

