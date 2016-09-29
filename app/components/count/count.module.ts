import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import {CountComponent} from './count.component';
import {TabsPieChartsModule } from '../tabsPieCharts/tabs-pie-charts.module';

@NgModule({
  	imports:      [ CommonModule, TabsPieChartsModule  ],
  	declarations: [ CountComponent],
  	exports:      [ CountComponent,CommonModule, TabsPieChartsModule]
})
export class CountModule {
	
}