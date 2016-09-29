import { NgModule }      from '@angular/core';

import { TcComponent } from './tc.component';
import { TcxxComponent } from '../../components/tcxx/tcxx.component';
import { TclxComponent } from '../../components/tctype/tclx.component';
import { tcRouting } from './tc.routing';

import { BreadLineModule } from '../../components/breadLine/bread-line.module';
//import { DropdownModule } from 'ng2-bootstrap/components/dropdown';

@NgModule({
	imports: [tcRouting, BreadLineModule],
	declarations: [ TcComponent,TcxxComponent,TclxComponent],
})
export class TcModule { }