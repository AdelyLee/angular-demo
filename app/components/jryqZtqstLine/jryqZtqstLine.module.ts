/**
 * 今日舆情载体趋势图折线图
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqZtqstLineComponent } from './jryqZtqstLine.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqZtqstLineComponent ],
    exports:      [ JryqZtqstLineComponent, CommonModule ],
    providers:    []
})
export class JryqZtqstLineModule {

}