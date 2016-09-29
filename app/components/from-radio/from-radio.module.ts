import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import {FromRadioComponent} from './from-radio.component';

@NgModule({
  	imports:      [ CommonModule ],
  	declarations: [ FromRadioComponent ],
  	exports:      [ FromRadioComponent, CommonModule ],
    providers:    []
})
export class FromRadioModule {
	
}