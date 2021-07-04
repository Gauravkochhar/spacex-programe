import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({ name: 'dataFromPath' })
export class DataFromPathPipe implements PipeTransform {

  transform(data: Object, path: string): Object {
    return _.isNull(_.get(data, path, '')) ? 'N.A' : _.toString(_.get(data, path, 'N.A'));
  }

}