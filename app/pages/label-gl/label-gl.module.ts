import { NgModule }      from '@angular/core';

import { LabelComponent } from './label-gl.component';
import { labelRouting } from './label-gl.routing';

import { BreadZdyModule } from '../../components/bread-zdy/bread-zdy.module';
import { ModalModule } from 'ng2-bootstrap/components/modal';

@NgModule({
	imports: [labelRouting, BreadZdyModule,ModalModule],
	declarations: [ LabelComponent],
})
export class LabelModule { }