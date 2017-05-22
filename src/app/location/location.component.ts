import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(44.977753, -93.265011),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
    var marker = new google.maps.Marker({
            position: new google.maps.LatLng(44.977753, -93.265011),
            map: map
    });
  }

}
