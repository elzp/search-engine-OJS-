import { Pipe, PipeTransform } from '@angular/core';
interface FilterObject {
  regex: RegExp;
  typeOfFilteredData: 'flatarray' | 'flatobject';
}
@Pipe({
  name: 'myfilter',
  pure: false,
})
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: FilterObject): any {
    if (!items || !filter) {
      return items;
    }
  }
}
