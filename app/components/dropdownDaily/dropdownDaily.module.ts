/**
 * 加入日报下拉框
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { DropdownDailyComponent } from './dropdownDaily.component';
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
@NgModule({
    imports:      [ CommonModule,DropdownModule ],
    declarations: [ DropdownDailyComponent ],
    exports:      [ DropdownDailyComponent, CommonModule ],
    providers:    []
})
export class DropdownDailyModule {

}