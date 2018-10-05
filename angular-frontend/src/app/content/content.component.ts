import { Component, OnInit } from '@angular/core';

import { ViewManagerService } from './../view-manager.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: []
})

export class ContentComponent implements OnInit {

  constructor(private viewManagerService: ViewManagerService) { }

  ngOnInit() {
    this.viewManagerService.setHomeViews();
  }

}
