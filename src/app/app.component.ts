import { Component } from '@angular/core';
import { BusServiceDetails } from './models/bus-service-details';
import { BusReportDetailsService } from './services/bus-report-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  busServiceStatus: BusServiceDetails[] = [];
  constructor(private busReportDetailsService: BusReportDetailsService) { }
  ngOnInit() {
    this.busReportDetailsService.fetchBusServiceStatus().subscribe(details => {
      this.busServiceStatus = details['data'];
    });
  }
}
