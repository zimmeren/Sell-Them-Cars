import { Component, OnInit } from '@angular/core';

import { ViewServiceService } from './../view-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: []
})

export class ContentComponent implements OnInit {

  constructor(private viewServiceService: ViewServiceService) { }

  ngOnInit() {
    this.viewServiceService.setHomeViews();
  }

}
