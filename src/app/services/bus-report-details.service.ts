import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BusServiceDetails } from '../models/bus-service-details';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BusReportDetailsService {

  constructor(private httpClient: HttpClient) { }

  fetchBusServiceStatus(): Observable<any> {
    return this.httpClient.get("assets/bus-services-data.json");
  }
}

