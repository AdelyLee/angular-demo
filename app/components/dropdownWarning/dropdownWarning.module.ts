/**
 * 加入预警下拉框
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { DropdownWarningComponent} from './dropdownWarning.component';
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
@NgModule({
    imports:      [ CommonModule,DropdownModule ],
    declarations: [ DropdownWarningComponent ],
    exports:      [ DropdownWarningComponent, CommonModule ],
    providers:    []
})
export class DropdownWarningModule {

}