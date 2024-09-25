import { Component, OnInit } from '@angular/core';
import { IndicatorService } from '../services/indicator.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public hoy = new Date();
  dollarValue: string = '';
  CoffePrice: string  = '';
  CocoaPrice: string = '';
  // dtfValue:string = ''; 

  constructor( private _indicatorService: IndicatorService) {}

  ngOnInit(): void {
    this.getCoffeePrice();
    this.getCocoaPrice();
    //this.getDtf();
    this.getDolar();


  }

  getCoffeePrice() {
    this._indicatorService.getIndicator('coffee').subscribe(
      (data) => {
        console.log( "cafe resultado", data)
        this.CoffePrice =  data.price;
      },
      (error) => {
        console.error('Error fetching coffee price', error);
      }
    );
  }


  getCocoaPrice() {
    this._indicatorService.getIndicator('cocoa').subscribe(
      (data) => {
        console.log( "cocoa resultado", data)
        this.CocoaPrice =  data.price;
      },
      (error) => {
        console.error('Error fetching cocoa price', error);
      }
    );
  }


  // getDtf(){
  //   this._indicatorService.getIndicator('dtf').subscribe(
  //     (data) => {
  //       console.log( "dtf resultado", data)
  //       this.dtfValue = this._indicatorService = data.value;
  //     },
  //     (error) => {
  //       console.error('Error fetching Dtf Value', error);
  //     }
  //   );

//  }


  getDolar(){
    this._indicatorService.getDollarValue().subscribe(data => {
      if (data && data.length > 0) {
        console.log('Datos recibidos de la API:', data[0]);
        this.dollarValue = data[0].valor; // Ajusta 'valor' a la propiedad específica del objeto
      } else {
        console.error('No se encontraron datos');
      }
    });
  }
}


