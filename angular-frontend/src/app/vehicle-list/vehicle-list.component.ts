import { Component, OnInit } from '@angular/core';
import { InventoryService } from './../inventory.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  inventory: object;

  constructor(private inventoryService: InventoryService) { }

  getInventory(): void {
    this.inventory = this.inventoryService.getInventory();
  }

  ngOnInit() {
    this.getInventory();
  }

}
