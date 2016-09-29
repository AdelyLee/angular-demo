/**
 * 控制台页面， 统计表格模块
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { StatisticalTableComponent }  from './statistical-table.component';

@NgModule({
  	imports:      [ CommonModule ],
  	declarations: [ StatisticalTableComponent ],
  	exports:      [ StatisticalTableComponent, CommonModule ],
})
export class StatisticalTableModule {
	
}