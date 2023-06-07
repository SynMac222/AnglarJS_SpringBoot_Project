import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import{Product} from '../_models/product'
import{Observable} from 'rxjs';


const BASE_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(BASE_URL+'/search/products/getAll');
    
  }

  getConditionalProducts( intput_search:string, application:string, type:string, mounting_location:string, accessories:string, minModelYear:number,  maxModelYear:number, minAirflow:number,  maxAirflow:number, minPower:number,  maxPower:number, minOperatingVoltage:number, maxOperatingVoltage:number, minFanSpeed:number,  maxFanSpeed:number): Observable<Product[]>{

    const params = new HttpParams().set('input_search', intput_search).set('application', application).set('type', type).set('mounting_location', mounting_location).set('accessories', accessories).set('minModelYear', minModelYear).set('maxModelYear', maxModelYear).set('minAirflow', minAirflow).set('maxAirflow', maxAirflow).set('minPower', minPower).set('maxPower', maxPower).set('minOperatingVoltage', minOperatingVoltage).set('maxOperatingVoltage', maxOperatingVoltage).set('minFanSpeed', minFanSpeed).set('maxFanSpeed', maxFanSpeed);
    return this.http.get<Product[]>(BASE_URL+'/search/condition',{params:params});
  }
}
