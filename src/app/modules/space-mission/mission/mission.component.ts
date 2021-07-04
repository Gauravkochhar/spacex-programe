import { Component, OnInit, Input } from '@angular/core';
import { Mission } from 'src/app/core/model/spacex-program';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  @Input() missionInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
