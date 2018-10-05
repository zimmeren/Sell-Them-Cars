import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

    // About Screen Values
    readonly aboutHeader: string = 'Getting to know Tester Auto Sales';
    readonly aboutText1: string = 'Tester auto sales is a family owned small business of 15 years.' +
      ' We are here to treat you like family when buying your next motor vehicle.';
    readonly aboutText2: string = 'More text here. More text here. More text here. More text here.' +
      ' More text here. More text here. More text here. More text here. More text here. More text here.' +
      ' More text here. More text here. More text here. More text here. More text here. More text here.' +
      ' More text here. More text here. More text here. More text here. More text here. More text here.';
    readonly aboutImage: string = '../assets/images/family-2145302_1280.png';

    // Contact Screen Values
    readonly contactHeader: string = 'Contact Information';
    readonly contactPhoneNumber: string = '000-000-0000';
    readonly contactEmail: string = 'testeremail@email.com ';

    // Location Screen Values
    readonly locationHeader: string = 'Location';
    readonly locationText1: string = 'Come visit us and see our selection in person. ';
    readonly locationText2: string = '0000 Tester Ave N TesterVille, test';
    readonly locationImage: string = '../assets/images/architecture-107598_1280.jpg';
    readonly locationLat: number = 44.977753;
    readonly locationLng: number = -93.265011;

    // Footer Values
    readonly footerText: string = '© Tester Auto Sales 2017';

    // Portal Values
    readonly portalText: string = 'View All Stock';

    // Header Nav Values
    readonly navHeader: string = 'Tester Auto Sales';

    // Aux Color NOTE: default is white
    readonly auxColor: string = '#4ebfe5';

}
