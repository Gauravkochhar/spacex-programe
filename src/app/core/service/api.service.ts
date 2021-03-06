import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private missionListUrl = 'launches';

  constructor(
    private httpService: HttpService) {
  }

  /**
  * Function to get mission list.
  * @param params Object
  * @return Observable as response.
  */
  public getMissionList(params: any) {
    return this.httpService.getRequest(this.missionListUrl, params, [], true);
  }

}
