import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // this will make the pipe impure
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString?: string, propsName?: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    //  push the item to the resultArray if the item's propsName is equal to the filterString
    const resultArray = [];
    for (const item of value) {
      if (item[propsName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
