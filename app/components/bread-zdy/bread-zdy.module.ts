import { NgModule, ModuleWithProviders, Optional, SkipSelf}      from '@angular/core';
import { CommonModule }        from '@angular/common';

import { BreadZdyComponent } from './bread-zdy.component';


@NgModule({
  	imports:      [ CommonModule ],
  	declarations: [ BreadZdyComponent ],
  	exports:      [ BreadZdyComponent, CommonModule ]
})
export class BreadZdyModule {
}