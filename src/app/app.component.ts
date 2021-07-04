import { Component } from '@angular/core';
import { LoaderService } from './core/service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'spacex-program';
  public showLoader = false;

  constructor(
    private _loaderService: LoaderService
  ) {
    this.activeLoaderMachine();
  }

  activeLoaderMachine() {
    this._loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    })
  }
}
