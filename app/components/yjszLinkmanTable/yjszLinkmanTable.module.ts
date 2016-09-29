/**
 * 预警设置联系人表格
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { YjszLinkmanTableComponent } from './yjszLinkmanTable.component';
import {ModalModule} from 'ng2-bootstrap/components/modal';
@NgModule({
    imports:      [ CommonModule,ModalModule ],
    declarations: [ YjszLinkmanTableComponent ],
    exports:      [ YjszLinkmanTableComponent, CommonModule ],
    providers:    []
})
export class YjszLinkmanTableModule {

}