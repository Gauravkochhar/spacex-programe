import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/service/api.service';
import * as _ from 'lodash';
import { UtilService } from 'src/app/core/service/util.service';
import { missionFilter } from 'src/app/core/constant';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Mission } from 'src/app/core/model/spacex-program';
import { LoaderService } from 'src/app/core/service/loader.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss'],
  animations: [
  ]
})
export class MissionListComponent implements OnInit {

  public readonly FILTER: any = missionFilter;
  public filterOpened = false;
  public filterApplied = false;
  public defaultListView = true;
  public filterYearList: number[] = [];
  public missionList$: Observable<Mission[]> | undefined;
  public appliedFilter: any = this.defaultFilter;

  constructor(
    private _apiService: ApiService,
    private _utilSerivice: UtilService,
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.getYearFilterList();
    this.getMissionList();
  }

  /**
  * This function is using to return default filter values of initial stage.
  */
  get defaultFilter(): any {
    return {
      limit: '100',
      year: '',
      launch: '',
      landing: ''
    };
  }

  /**
  * This Function is using to create dynamic list of last 16 years for filter operation.
  */
  private getYearFilterList() {
    const currentYear = new Date().getFullYear();
    for (let i = (currentYear - 15); i <= currentYear; i++) {
      this.filterYearList.push(i);
    }
  }

  /**
  * 1- This Function returns an object with applied filter values.
  * 2- Using for request body
  */
  private getAppliedFilter() {
    return this._utilSerivice.removeEmptyProperties(_.cloneDeep({
      limit: _.get(this.appliedFilter, 'limit', '100'),
      launch_success: _.get(this.appliedFilter, this.FILTER.launch, ''),
      land_success: _.get(this.appliedFilter, this.FILTER.landing, ''),
      launch_year: _.get(this.appliedFilter, this.FILTER.year, ''),
    }));
  }

  /**
  * This function is using to get default mission list according to applied filter.
  */
  private getMissionList() {
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

  /**
  * This function is calling the API with respect to the requested filter data.
  */
  public checkFilter(FILTER: string, requestFilterVal: string | number | boolean) {
    this.appliedFilter[FILTER] = (this.appliedFilter[FILTER] === requestFilterVal) ? '' : requestFilterVal;
    this.getMissionList();
    this.updateFilterStatus();

  }

  /**
  * This function updating the applied filter status.
  */
  private updateFilterStatus() {
    this.filterApplied = !Object.keys(this.FILTER).every((filterKey) => this.appliedFilter[filterKey] === this.defaultFilter[filterKey]);
  }

  /**
  * This function is clearing the applied filters.
  */
  private resetFilter() {
    this.appliedFilter = this.defaultFilter;
  }

}
