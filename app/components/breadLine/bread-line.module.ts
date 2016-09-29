/**
 * 面包线模块，该模块为 Share Module。
 * 调用模块时向模块传递参数，根据不同的参数来渲染模块
 * 参见：https://angular.io/docs/ts/latest/guide/ngmodule.html 
 * 	Configure core services with CoreModule.forRoot
 * @author Lyc
 * @Time 2016年9月6日
 */

import { NgModule, ModuleWithProviders, Optional, SkipSelf}      from '@angular/core';
import { CommonModule }        from '@angular/common';

import { BreadLineComponent } from './bread-line.component';


@NgModule({
  	imports:      [ CommonModule ],
  	declarations: [ BreadLineComponent ],
  	exports:      [ BreadLineComponent, CommonModule ]
})
export class BreadLineModule {
}