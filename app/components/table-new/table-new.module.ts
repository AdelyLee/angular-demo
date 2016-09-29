import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import {TableNewComponent} from './table-new.component';

@NgModule({
  	imports:      [ CommonModule ],
  	declarations: [ TableNewComponent ],
  	exports:      [ TableNewComponent, CommonModule ],
    providers:    []
})
export class TableNewModule {
	
}