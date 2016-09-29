/**
 * 今日舆情站点分布表格
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import {  JryqZdfbTableComponent} from './jryqZdfbTable.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqZdfbTableComponent ],
    exports:      [ JryqZdfbTableComponent, CommonModule ],
    providers:    []
})
export class JryqZdfbTableModule {

}