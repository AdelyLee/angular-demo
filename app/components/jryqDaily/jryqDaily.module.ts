/**
 * 今日舆情日报
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqDailyComponent } from './jryqDaily.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqDailyComponent ],
    exports:      [ JryqDailyComponent, CommonModule ],
    providers:    []
})
export class JryqDailyModule {

}