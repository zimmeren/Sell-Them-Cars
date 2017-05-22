import { Injectable } from '@angular/core';

@Injectable()
export class ViewServiceService {

  private aboutView: boolean = false;
  private contactView: boolean = false;
  private locationView: boolean = false;
  private portalView: boolean = false;
  private vehicleListView: boolean = false;
  private imageViewerView: boolean = false;

  constructor() { }

  getAboutViewStatus(): boolean{
    return this.aboutView;
  }

  getContactViewStatus(): boolean{
    return this.contactView;
  }

  getLocationViewStatus(): boolean{
    return this.locationView;
  }

  getPortalViewStatus(): boolean{
    return this.portalView;
  }

  getVehicleListViewStatus(): boolean{
    return this.vehicleListView;
  }

  getImageViewViewStatus(): boolean{
    return this.imageViewerView;
  }

  setHomeViews(): void{
    this.aboutView = true;
    this.contactView = true;
    this.locationView = true;
    this.portalView = true;
    this.vehicleListView = true;
    this.imageViewerView = true;
  }

  setVehiclesViews(): void{
    this.aboutView = false;
    this.contactView = false;
    this.locationView = false;
    this.portalView = false;
    this.vehicleListView = true;
    this.imageViewerView = false;
  }

  setContactViews(): void{
    this.aboutView = false;
    this.contactView = true;
    this.locationView = false;
    this.portalView = false;
    this.vehicleListView = false;
    this.imageViewerView = false;
  }

  setLocationViews(): void{
    this.aboutView = false;
    this.contactView = false;
    this.locationView = true;
    this.portalView = false;
    this.vehicleListView = false;
    this.imageViewerView = false;
  }

  setAboutViews(): void{
    this.aboutView = true;
    this.contactView = false;
    this.locationView = false;
    this.portalView = false;
    this.vehicleListView = false;
    this.imageViewerView = false;
  }

}
