import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  transform(value: string="" ,defval:string="-",replaceTo:string=" "): string {
    return value.replace(defval,replaceTo);
  }

}
