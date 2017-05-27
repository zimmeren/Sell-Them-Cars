import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InventoryService {

  private inventoryUrl = '/api/inventory';

  constructor(private http: Http) { }

  getInventory(): Promise<any[]> {
    return this.http.get(this.inventoryUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
