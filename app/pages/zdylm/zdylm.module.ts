import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ZdylmComponent } from './zdylm.component';
import { zdylmRouting } from './zdylm.routing';

import { BreadLineModule } from '../../components/breadLine/bread-line.module';
import { ModalModule } from 'ng2-bootstrap/components/modal';

@NgModule({
	imports: [zdylmRouting, BreadLineModule,ModalModule,FormsModule],
	declarations: [ ZdylmComponent],
	exports:[ ZdylmComponent,BreadLineModule,ModalModule]
})
export class ZdylmModule { }