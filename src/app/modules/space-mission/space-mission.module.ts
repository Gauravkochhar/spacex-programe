import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceMissionRoutingModule } from './space-mission-routing.module';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionComponent } from './mission/mission.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../shared/shared.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    MissionListComponent,
    MissionComponent
  ],
  imports: [
    CommonModule,
    SpaceMissionRoutingModule,
    SharedModule,
    ScrollingModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SpaceMissionModule { }
