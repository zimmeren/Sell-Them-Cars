import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from './../configuration.service';

declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(this.configurationService.locationLat, this.configurationService.locationLng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
    var marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.configurationService.locationLat, this.configurationService.locationLng),
            map: map
    });
  }

}
