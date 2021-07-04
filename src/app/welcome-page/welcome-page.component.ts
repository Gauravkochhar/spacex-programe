import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../core/constant';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  redirectToProductsPage() {
    this._router.navigate([routes['mission'], routes['mission-list']]);
  }

}
