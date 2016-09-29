import { NgModule }      from '@angular/core';

import { HelpComponent } from './help.component';
import { helpRouting } from './help.routing';
import { HelplbComponent } from '../../components/help-wt/help-wz.component';
import { BreadLineModule } from '../../components/breadLine/bread-line.module';
import { AccordionModule } from 'ng2-bootstrap/components/accordion';

@NgModule({
	imports: [helpRouting, BreadLineModule,AccordionModule],
	declarations: [ HelpComponent,HelplbComponent],
})
export class HelpModule { }