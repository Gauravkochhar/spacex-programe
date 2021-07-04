import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoaderService } from './loader.service';
import { tap } from 'rxjs/internal/operators';
import { Observable } from 'rxjs';

interface HeaderInterface {
  key: string,
  value: string
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _baseUrl = environment.baseUrl;

  httpOptions: any = {
    headers: new HttpHeaders(),
    params: new HttpParams(),
    observe: null
  };

  constructor(
    private httpClient: HttpClient,
    private loaderService: LoaderService
  ) { }

  /**
  * Function to return common headers
  * @return headers Object
  */
  getCommonHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  /**
  * Function to return common body with appended data.
  * @return headers Object
  */
  getCommonBodyData(customBody: any) {
    const commonBody = {};
    return {
      ...commonBody,
      ...customBody
    }
  }

  /**
  * Function to Add Custom Headers and return it
  * @param headerArr Array<Object>
  * @return headers Object
  */
  getHeaders(headerArr?: Array<HeaderInterface>) {
    let headers = this.getCommonHeaders();
    if (headerArr)
      headerArr.forEach((headerObj) => {
        let key = headerObj['key'];
        let value = headerObj['value'];
        headers.set(key, value);
      });
    return headers;
  }

  /**
  * Function for calling Rest API using GET request.
  */
  getRequest(url: String, params?: any, headerArr?: Array<HeaderInterface>, needLoader: boolean = true): Observable<any> {
    if (needLoader) {
      this.loaderService.showLoader();
    }
    let headers = this.getHeaders(headerArr);
    this.httpOptions = {
      headers: headers,
      params: params,
      observe: "response",
    };
    return this.httpClient
      .get(`${this._baseUrl}/${url}`, this.httpOptions)
      .pipe(tap(res => {
        if (needLoader) { this.loaderService.hideLoader(); }
      }, err => {
        if (needLoader) { this.loaderService.hideLoader(); }
      }));
  }

  /**
   * Function for calling Rest API using POST request.
   */
  postRequest(url: string, body: Object, headerArr?: Array<HeaderInterface>, params?: HttpParams, needLoader: boolean = true): Observable<any> {
    if (needLoader) {
      this.loaderService.showLoader();
    }
    const headers: HttpHeaders = this.getHeaders(headerArr);
    const _body = this.getCommonBodyData(body);
    this.httpOptions = {
      headers: headers,
      params: params,
      observe: 'response'
    }
    return this.httpClient.post(`${this._baseUrl}/${url}`, _body, this.httpOptions)
      .pipe(tap(res => {
        if (needLoader) { this.loaderService.hideLoader(); }
      }, err => {
        if (needLoader) { this.loaderService.hideLoader(); }
      }));
  }

  /**
  * Function for calling Rest API using PUT request.
  */
  putRequest(url: String, body: Object, params?: HttpParams, headerArr?: Array<HeaderInterface>, needLoader: boolean = true) {
    if (needLoader) {
      this.loaderService.showLoader();
    }
    const headers: HttpHeaders = this.getHeaders(headerArr);
    const _body = this.getCommonBodyData(body);
    this.httpOptions = {
      headers: headers,
      params: params,
      observe: 'response'
    }
    return this.httpClient.put(`${this._baseUrl}/${url}`, _body, this.httpOptions).pipe(tap(res => {
      if (needLoader) { this.loaderService.hideLoader(); }
    }, err => {
      if (needLoader) { this.loaderService.hideLoader(); }
    }));
  }

  /**
  * Function for calling Rest API using DELETE request.
  */
  deleteRequest(url: String, params?: HttpParams, headerArr?: Array<HeaderInterface>, needLoader: boolean = true) {
    if (needLoader) {
      this.loaderService.showLoader();
    }
    const headers: HttpHeaders = this.getHeaders(headerArr);
    this.httpOptions = {
      headers: headers,
      params: params,
      observe: 'response'
    }
    return this.httpClient.delete(`${this._baseUrl}/${url}`, this.httpOptions).pipe(tap(res => {
      if (needLoader) { this.loaderService.hideLoader(); }
    }, err => {
      if (needLoader) { this.loaderService.hideLoader(); }
    }));
  }
}
