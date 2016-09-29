/**
 * 舆情预警筛选条件
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { YqyjOptionsComponent } from './yqyjOptions.component';
import {yqyjOptionsRouting}   from './yqyjOptions.routing';
@NgModule({
    imports:      [ yqyjOptionsRouting,CommonModule ],
    declarations: [ YqyjOptionsComponent ],
    exports:      [ YqyjOptionsComponent, CommonModule ],
    providers:    []
})
export class YqyjOptionsModule {

}