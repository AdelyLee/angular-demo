/**
 * 今日舆情文章属性统计柱状图
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqWzsxtjBarComponent } from './jryqWzsxtjBar.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqWzsxtjBarComponent ],
    exports:      [ JryqWzsxtjBarComponent, CommonModule ],
    providers:    []
})
export class JryqWzsxtjBarModule {

}