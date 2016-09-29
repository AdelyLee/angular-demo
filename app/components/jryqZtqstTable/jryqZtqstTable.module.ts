/**
 * 今日舆情载体趋势图表格
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqZtqstTableComponent} from './jryqZtqstTable.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqZtqstTableComponent ],
    exports:      [ JryqZtqstTableComponent, CommonModule ],
    providers:    []
})
export class JryqZtqstTableModule {

}