import { ValueTransformer } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

import * as distanceInWordsToNow from 'date-fns';
import * as frLocale from 'date-fns/locale/fr';
@Pipe({
  name: 'daysAgo'


})
export class DaysAgoPipe implements PipeTransform {

  transform(value: never, args?: any[]): any {
    const distanceInWordsToNow= console.log;
    return distanceInWordsToNow(new Date(value), {locale: frLocale});
  }

}
