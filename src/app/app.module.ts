import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ContentComponent } from './content/content.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortalComponent } from './portal/portal.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { VehicleComponent } from './vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    ContentComponent,
    LocationComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    PortalComponent,
    ImageViewerComponent,
    VehicleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
