import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {
  transform(value: string, uppercase: boolean = false): string {
    value = 'Mr ' + value;
    if ( uppercase === true ) {
      value = value.toUpperCase();
    }
    return value;
  }

}
