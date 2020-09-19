import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Pipe({
  name: 'arrivalStatus'
})
export class ArrivalStatusPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) { }

  transform(value: number): SafeHtml {
    let status = "";
    let color = "";
    if (value < 0) { status = 'Early'; color = 'red'; }
    else if (value > 0 && value < 300) { status = 'On Time'; color = 'green'; }
    else if (value > 300) { status = 'Late'; color = 'blue' }
    else { status = 'Not Available'; color = 'black'; }
    return this._sanitizer.bypassSecurityTrustHtml('<span style="color:' + color
      + ';">' + status + '</span>')
  }

}
