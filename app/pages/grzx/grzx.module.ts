import { NgModule }      from '@angular/core';

import { GrzxComponent } from './grzx.component';
import { grzxRouting } from './grzx.routing';
import { GrzxxxlbComponent } from '../../components/grzx-xx/grzx-xx.component';
import { GrzxjbxxlbComponent } from '../../components/grzx-jbxx/grzx-jbxx.component';
import { GrzxrzxxlbComponent } from '../../components/grzx-rzxx/grzx-rzxx.component';
import { BreadLineModule } from '../../components/breadLine/bread-line.module';
//import { DropdownModule } from 'ng2-bootstrap/components/dropdown';

@NgModule({
	imports: [grzxRouting, BreadLineModule],
	declarations: [ GrzxComponent,GrzxxxlbComponent,GrzxjbxxlbComponent,GrzxrzxxlbComponent],
})
export class GrzxModule { }