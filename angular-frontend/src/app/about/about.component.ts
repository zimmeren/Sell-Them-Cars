import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from './../configuration.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
  }

}
