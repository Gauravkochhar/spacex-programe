import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public callPendingStatus = 0;
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
  * Function is using to show the loader.
  */
  public showLoader() {
    this.callPendingStatus++;
    this.status.next(true);
  }

  /**
  * Function is using to hide the loader.
  */
  public hideLoader(force?: boolean) {
    this.callPendingStatus--;
    if (this.callPendingStatus == 0) {
      this.status.next(false);
    }
    if (force) {
      this.callPendingStatus = 0;
      this.status.next(false);
    }
  }
}
