/**
 * 今日舆情文章属性统计表格
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqWzsxtjTableComponent } from './jryqWzsxtjTable.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqWzsxtjTableComponent ],
    exports:      [ JryqWzsxtjTableComponent, CommonModule ],
    providers:    []
})
export class JryqWzsxtjTableModule {

}