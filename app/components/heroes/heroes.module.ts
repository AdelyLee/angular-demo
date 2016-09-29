import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HeroesComponent }     from './heroes.component';
import { TabsLineChartsModule } from '../tabsLineCharts/tabs-line-charts.module';

@NgModule({
  	imports:      [ CommonModule, TabsLineChartsModule],
  	declarations: [ HeroesComponent ],
  	exports:      [ HeroesComponent,TabsLineChartsModule,CommonModule ],
    providers:    []
})
export class HeroesModule {
	
}