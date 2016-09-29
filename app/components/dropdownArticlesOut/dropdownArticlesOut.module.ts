/**
 * 导出文章下拉框
 */
import { NgModule}      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { DropdownArticlesOutComponent } from './dropdownArticlesOut.component';
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
@NgModule({
    imports:      [ CommonModule,DropdownModule ],
    declarations: [ DropdownArticlesOutComponent ],
    exports:      [ DropdownArticlesOutComponent, CommonModule ],
    providers:    []
})
export class DropdownArticlesOutModule {

}