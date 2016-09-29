/**
 * Created by topcom on 2016/9/23.
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { BzyqWeekComponent } from './bzyqWeek.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ BzyqWeekComponent ],
    exports:      [ BzyqWeekComponent, CommonModule ],
    providers:    []
})
export class BzyqWeekModule {

}