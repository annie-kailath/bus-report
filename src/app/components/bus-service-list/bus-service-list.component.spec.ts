import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BusServiceListComponent } from './bus-service-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BusServiceListComponent', () => {
    let fixture: ComponentFixture<BusServiceListComponent>;
    let app: BusServiceListComponent;
    let debugElm; DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BusServiceListComponent
            ],
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(BusServiceListComponent);
        app = fixture.componentInstance;
        debugElm = fixture.debugElement;
        app.busServiceList = {
            "organisation": "Sydney Buses",
            "date": "25/09/2015",
            "busData": [

                {
                    "busId": 79367,
                    "routeVariant": "L21 2 1",
                    "deviationFromTimetable": 347
                }
            ]
        };
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });
});

