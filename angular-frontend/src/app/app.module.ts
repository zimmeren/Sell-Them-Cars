import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { LocationComponent } from './location/location.component';
import { PortalComponent } from './portal/portal.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderNavComponent,
    ImageViewerComponent,
    LocationComponent,
    PortalComponent,
    VehicleComponent,
    VehicleListComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
