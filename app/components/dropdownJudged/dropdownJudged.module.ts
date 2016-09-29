/**
 * 判研为下拉框
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { DropdownJudgedComponent } from './dropdownJudged.component';
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
@NgModule({
    imports:      [ CommonModule,DropdownModule ],
    declarations: [ DropdownJudgedComponent ],
    exports:      [ DropdownJudgedComponent, CommonModule ],
    providers:    []
})
export class DropdownJudgedModule {

}