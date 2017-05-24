import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from './../configuration.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit() {
  }

}
