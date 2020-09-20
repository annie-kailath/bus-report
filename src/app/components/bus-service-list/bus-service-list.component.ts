import { Component, OnInit, Input } from '@angular/core';
import { BusServiceDetails } from '../../models/bus-service-details';
@Component({
  selector: 'app-bus-service-list',
  templateUrl: './bus-service-list.component.html',
  styleUrls: ['./bus-service-list.component.scss']
})
export class BusServiceListComponent implements OnInit {
  isExpanded = false;
  @Input() busServiceList: BusServiceDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
