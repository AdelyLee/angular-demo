import { NgModule }      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { KeywordComponent } from './keyword.component';
import { BreadLineModule } from '../../components/breadLine/bread-line.module';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { keywordRouting } from './keyword.routing';



@NgModule({
	imports: [CommonModule,keywordRouting, BreadLineModule,ModalModule,FormsModule],
	declarations: [ KeywordComponent],
	exports:      [ KeywordComponent, CommonModule,ModalModule],
})
export class KeywordModule { }