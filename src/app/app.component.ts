import { Observable, of } from 'rxjs';
import { Component, ViewChild } from '@angular/core';
import { LoaderService } from './core/service/loader.service';
import { retry, take } from 'rxjs/internal/operators';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'spacex-program';
  public showLoader = false;
  @ViewChild('loader', { static: false }) loaderRef!: HTMLElement;

  constructor(
    private _loaderService: LoaderService,
    private _cd: ChangeDetectorRef
  ) {
    this.setLoaderSubscription();
  }

  /**
  * This function is updating the loader state - show/hide.
  */
  setLoaderSubscription() {
    this._loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    })
  }

  /**
  * This function is using to manually call to dom for detect change (to avoid expressChange error).
  */
  ngAfterViewChecked() {
    this._cd.detectChanges();
  }
}
