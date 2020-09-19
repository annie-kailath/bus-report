import { TestBed, getTestBed } from '@angular/core/testing';
import { BusReportDetailsService } from './bus-report-details.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BusServiceDetails } from '../models/bus-service-details';

describe('BusServiceDetailsService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: BusReportDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusReportDetailsService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(BusReportDetailsService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  })

  it('should fetch the bus report details', () => {
    const mockData = {
      "data": [
        {
          "organisation": "Sydney Buses",
          "date": "25/09/2015",
          "busData": [

            {
              "busId": "79367",
              "routeVariant": "L21 2 1",
              "deviationFromTimetable": 347
            }
          ]
        }
      ]
    }

    service.fetchBusServiceStatus().subscribe(data => {
      expect(data['data'].length).toBe(1);
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(`assets/bus-services-data.json`);
    expect(req.request.method).toBe("GET");
    req.flush(mockData);
  })
});

