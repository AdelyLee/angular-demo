/**
 * Created by topcom on 2016/9/8.
 */
import { NgModule }      from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { SjjcComponent } from './sjjc.component';
import { sjjcRouting } from './sjjc.routing';
//事件监测图表
import { BreadLineModule } from '../../components/breadLine/bread-line.module';
import { SjjcSearchModule } from '../../components/sjjcSearch/sjjcSearch.module';
import { SjjcTableModule } from '../../components/sjjcTable/sjjcTable.module';



@NgModule({
	imports: [sjjcRouting, BreadLineModule,SjjcTableModule,ModalModule,SjjcSearchModule],

	declarations: [ SjjcComponent ],
})
export class SjjcModule { }