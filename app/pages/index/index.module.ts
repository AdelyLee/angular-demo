import { NgModule }      from '@angular/core';

import { IndexComponent } from './index.component';
import { BreadLineModule } from '../../components/breadLine/bread-line.module';
import { StatisticalTableModule } from '../../components/statistical-table/statistical-table.module';
import { DashboardModule } from '../../components/dash/dashboard.module';
import { HeroDetailModule } from '../../components/herodetail/herodetail.module';
import { HeroesModule } from '../../components/heroes/heroes.module';
import { CountModule } from '../../components/count/count.module';
import { NewsModule } from '../../components/news/news.module';
//import { AccordionModule } from 'ng2-bootstrap/components/accordion';


import { indexRouting } from './index.routing';

@NgModule({
	imports: [
	indexRouting, 
	BreadLineModule, 
	StatisticalTableModule, 
	DashboardModule, 
	HeroDetailModule, 
	HeroesModule,
	CountModule,
	NewsModule,
	//AccordionModule
	],
	declarations: [ IndexComponent ],
})
export class IndexModule { }