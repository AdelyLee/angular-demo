/**
 * 今日舆情人物活跃度表格
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqRwhydTableComponent } from './jryqRwhydTable.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqRwhydTableComponent ],
    exports:      [ JryqRwhydTableComponent, CommonModule ],
    providers:    []
})
export class JryqRwhydTableModule {

}