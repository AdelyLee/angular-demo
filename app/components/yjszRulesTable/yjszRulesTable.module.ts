/**
 * 预警设置预警规则表格
 */
import { NgModule}      from '@angular/core';
import {ModalModule} from 'ng2-bootstrap/components/modal';
import { CommonModule }        from '@angular/common';
import { YjszRulesTableComponent } from './yjszRulesTable.component';

@NgModule({
    imports:      [ CommonModule,ModalModule ],
    declarations: [ YjszRulesTableComponent ],
    exports:      [ YjszRulesTableComponent, CommonModule ],
    providers:    []
})
export class YjszRulesTableModule {

}