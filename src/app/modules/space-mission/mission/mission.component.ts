import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  @Input() public missionInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
