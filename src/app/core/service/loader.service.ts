import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private callPendingStatus = 0;
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public showLoader() {
    this.callPendingStatus++;
    this.status.next(true);
  }

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
