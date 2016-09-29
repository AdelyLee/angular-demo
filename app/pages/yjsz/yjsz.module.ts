/**
 * Created by topcom on 2016/9/8.
 */
import { NgModule }      from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { TabsModule } from 'ng2-bootstrap/components/tabs';
import { YjszComponent } from './yjsz.component';
import { yjszRouting } from './yjsz.routing';

import { BreadLineModule } from '../../components/breadLine/bread-line.module';
import { YjszEmailFormModule } from '../../components/yjszEmailForm/yjszEmailForm.module';
import { YjszLinkmanTableModule } from '../../components/yjszLinkmanTable/yjszLinkmanTable.module';
import { YjszNoteFormModule } from '../../components/yjszNoteForm/yjszNoteForm.module';
import { YjszPopupsFormModule } from '../../components/yjszPopupsForm/yjszPopupsForm.module';
import { YjszRulesTableModule } from '../../components/yjszRulesTable/yjszRulesTable.module';

@NgModule({
    imports: [TabsModule,ModalModule,yjszRouting,BreadLineModule,YjszEmailFormModule,YjszLinkmanTableModule,YjszNoteFormModule,YjszPopupsFormModule,YjszRulesTableModule],
    declarations: [ YjszComponent ],
})
export class YjszModule { }