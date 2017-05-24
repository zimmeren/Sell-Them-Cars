import { Component, OnInit } from '@angular/core';

import { ViewServiceService } from './../view-service.service';
import { ConfigurationService } from './../configuration.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(private viewServiceService: ViewServiceService, private configurationService: ConfigurationService) { }

  ngOnInit() {
  }

}
