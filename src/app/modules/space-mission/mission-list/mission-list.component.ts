import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import * as _ from 'lodash';
import { UtilService } from 'src/app/core/service/util.service';
import { missionFilter } from 'src/app/core/constant';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Mission } from 'src/app/core/model/spacex-program';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss'],
  animations: [
  ]
})
export class MissionListComponent implements OnInit {

  public filterOpened = false;
  public readonly FILTER: any = missionFilter;
  public filterYearList: number[] = [];
  public defaultListView: boolean = true;
  public missionList$: Observable<Mission[]> | undefined;
  public appliedFilter: any = {
    limit: '100',
    year: '',
    launch: '',
    landing: ''
  };

  constructor(
    private _apiService: ApiService,
    private _utilSerivice: UtilService
  ) { }

  ngOnInit() {
    this.getYearFilterList();
    this.getMissionList();
  }

  getYearFilterList() {
    const currentYear = new Date().getFullYear();
    for (let i = (currentYear - 15); i <= currentYear; i++) {
      this.filterYearList.push(i);
    }
  }

  getAppliedFilter() {
    return this._utilSerivice.removeEmptyProperties(_.cloneDeep({
      limit: _.get(this.appliedFilter, 'limit', '100'),
      launch_success: _.get(this.appliedFilter, this.FILTER.launch, ''),
      land_success: _.get(this.appliedFilter, this.FILTER.landing, ''),
      launch_year: _.get(this.appliedFilter, this.FILTER.year, ''),
    }));
  }

  getMissionList() {
    this._apiService.getMissionList(this.getAppliedFilter()).subscribe((res: Mission[]) => {
      const isResultOk = _.isArray(_.get(res, 'body')) ? true : false;
      if (isResultOk) {
        this.missionList$ = of(_.get(res, 'body'));
      } else {
        this.resetFilter();
        this.missionList$ = of([]);
      }
    })
  }

  checkFilter(FILTER: string, requestFilterVal: string | number | boolean) {
    this.appliedFilter[FILTER] = (this.appliedFilter[FILTER] === requestFilterVal) ? '' : requestFilterVal;
    this.getMissionList();
  }

  resetFilter() {
    this.appliedFilter = {
      limit: '100',
      year: '',
      launch: '',
      landing: ''
    }
  }

}
