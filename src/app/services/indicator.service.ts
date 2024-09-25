import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IndicatorService {
  private apiUrlDolar = 'https://www.datos.gov.co/resource/ceyp-9c7c.json?$order=vigenciadesde%20DESC&$limit=1';
  private apiIndicadores = 'http://54.39.98.164:5000/';



  constructor( private http: HttpClient) { }

  

  getDollarValue(): Observable<any> {
    return this.http.get<any>(this.apiUrlDolar);
  }


  /* Indicadores  de apiIndicadores */
  getIndicator(indicator: string): Observable<any> {
    const url = `${this.apiIndicadores}${indicator}`;
    console.log(url)
    return this.http.get<any>(url);
  }


}


