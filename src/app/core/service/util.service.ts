import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
  * Function is using for remove only undefined containing properties.
  */
  public removeUndefined(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
  * Function is removing falsy value properties of an object.
  */
  public removeEmptyProperties(obj: any) {
    return _.pickBy(obj, (value) => value !== '');
  }
}


