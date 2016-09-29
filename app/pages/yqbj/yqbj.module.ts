/**
 * 舆情警报模块
 */
import { NgModule }      from '@angular/core';

import { YqbjComponent } from './yqbj.component';
import { BarModule } from '../../components/bar/bar.module';
import { yqbjRouting } from './yqbj.routing';

import { BreadLineModule } from '../../components/breadLine/bread-line.module';

@NgModule({
	imports: [yqbjRouting, BarModule, BreadLineModule],
	declarations: [ YqbjComponent ],
})
export class YqbjModule { }