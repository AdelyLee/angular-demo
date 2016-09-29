/**
 * 今日舆情载体分布表格
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqZtfbTableComponent } from './jryqZtfbTable.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqZtfbTableComponent ],
    exports:      [ JryqZtfbTableComponent, CommonModule ],
    providers:    []
})
export class JryqZtfbTableModule {

}