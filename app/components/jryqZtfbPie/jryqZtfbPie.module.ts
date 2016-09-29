/**
 * 今日舆情载体分布饼图
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqZtfbPieComponent } from './jryqZtfbPie.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqZtfbPieComponent ],
    exports:      [ JryqZtfbPieComponent, CommonModule ],
    providers:    []
})
export class JryqZtfbPieModule {

}