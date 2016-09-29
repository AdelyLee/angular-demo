/**
 * Created by topcom on 2016/9/12.
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { SjjcTableComponent } from './sjjcTable.component';
import {ModalModule} from 'ng2-bootstrap/components/modal';
@NgModule({
    imports:      [ CommonModule ,ModalModule],
    declarations: [ SjjcTableComponent ],
    exports:      [ SjjcTableComponent, CommonModule ],
    providers:    []
})
export class SjjcTableModule {

}