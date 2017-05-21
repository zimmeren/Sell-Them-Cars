import { Component, OnInit } from '@angular/core';

import { ViewServiceService } from './../view-service.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(private viewServiceService: ViewServiceService) { }

  ngOnInit() {
  }

}
