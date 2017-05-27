import { Component, OnInit } from '@angular/core';
import { InventoryService } from './../inventory.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  inventory: object;

  constructor(private inventoryService: InventoryService) { }

  getInventory(): void {
    this.inventoryService
        .getInventory()
        .then(inventory => this.inventory = inventory);
  }

  ngOnInit() {
    this.getInventory();
  }

}
