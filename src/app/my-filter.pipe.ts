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
    if (filter.typeOfFilteredData === 'flatobject') {
      return items
        .map((it) => {
          if (Object.values(it).some((it2: string) => filter.regex.test(it2))) {
            return it;
          }
        })
        .filter((it) => it !== undefined);
    }
    if (filter.typeOfFilteredData === 'flatarray') {
      return items.filter((it) => filter.regex.test(it));
    }
  }
}
