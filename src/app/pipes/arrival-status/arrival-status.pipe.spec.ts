import { ArrivalStatusPipe } from './arrival-status.pipe';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// Component for integrated testing of the pipe
@Component({
    template: `<span [innerHTML]="deviationFromTimetable | arrivalStatus"></span>`
})

class HostComponent {
    deviationFromTimetable: number;
}

describe('ArrivalStatusPipe integration test cases', () => {
    let fixture: ComponentFixture<HostComponent>;
    let component: HostComponent;
    let debugElement: DebugElement;
    beforeEach(() => {
        TestBed
            .configureTestingModule({
                declarations: [ArrivalStatusPipe, HostComponent],
                imports: [
                    BrowserModule
                ]
            }).compileComponents();
        fixture = TestBed.createComponent(HostComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;

    });


    it('should display a span with text "Early" in red when the value entered is a negative value', () => {

        component.deviationFromTimetable = -222;
        fixture.detectChanges();
        const span = debugElement.query(By.css('span')).nativeElement;
        expect(span.innerText).toEqual('Early');

    });
    it('should display a span with text "On Time" in green when the value entered is a  value between 0 and 300', () => {
        component.deviationFromTimetable = 32;
        fixture.detectChanges();
        const span = debugElement.query(By.css('span')).nativeElement;
        expect(span.innerText).toEqual('On Time');
    });

    it('should display a span with text "Late" in blue when the value entered is a  value greater than 300', () => {
        component.deviationFromTimetable = 320;
        fixture.detectChanges();
        const span = debugElement.query(By.css('span')).nativeElement;
        expect(span.innerText).toEqual('Late');
    });

    it('should display a span with text "Not Available" in black when the value entered is a null value', () => {
        component.deviationFromTimetable = null;
        fixture.detectChanges();
        const span = debugElement.query(By.css('span')).nativeElement;
        expect(span.innerText).toEqual('Not Available');
    });

});

describe('ArrivalStatusPipe', () => {
    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    BrowserModule
                ]
            });
    });
    it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
        const pipe = new ArrivalStatusPipe(domSanitizer);
        expect(pipe).toBeTruthy();
    }));
})
