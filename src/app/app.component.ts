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
    this.activeLoaderMachine();
  }

  activeLoaderMachine() {
    this._loaderService.status.subscribe((val: boolean) => {

      this.showLoader = val;
    })
  }

  ngAfterViewChecked() {
    this._cd.detectChanges();
  }
}
