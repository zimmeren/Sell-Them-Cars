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
    const mapProp = {
      center: new google.maps.LatLng(this.configurationService.locationLat, this.configurationService.locationLng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(document.getElementById('gmap'), mapProp);
    const marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.configurationService.locationLat, this.configurationService.locationLng),
            map: map
    });
  }

}
