import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animated-button',
  templateUrl: './animated-button.component.html',
  styleUrls: ['./animated-button.component.scss']
})
export class AnimatedButtonComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onBtnClick() {
    this.buttonClicked.emit(true);
  }

}
