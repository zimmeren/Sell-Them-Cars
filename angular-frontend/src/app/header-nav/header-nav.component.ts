import { Component, OnInit } from '@angular/core';

import { ViewManagerService } from './../view-manager.service';
import { ConfigurationService } from './../configuration.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(private viewManagerService: ViewManagerService, private configurationService: ConfigurationService) { }

  ngOnInit() {
  }

}
