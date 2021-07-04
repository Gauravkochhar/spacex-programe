import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  removeUndefined(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  removeEmptyProperties(obj: any) {
    return _.pickBy(obj, (value) => value !== '');
  }
}
