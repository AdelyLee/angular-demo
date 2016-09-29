
/**
 *加入分类报告下拉框
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { DropdownClassifyComponent } from './dropdownClassify.component';
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
@NgModule({
    imports:      [ CommonModule,DropdownModule ],
    declarations: [ DropdownClassifyComponent ],
    exports:      [ DropdownClassifyComponent, CommonModule ],
    providers:    []
})
export class DropdownClassifyModule {

}