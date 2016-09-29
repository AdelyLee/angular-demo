import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { DashboardComponent }     from './dashboard.component';
import { FunnelModule } from '../../components/funnel/funnel.module';

@NgModule({
  	imports:      [ CommonModule, FunnelModule ],
  	declarations: [ DashboardComponent ],
  	exports:      [ DashboardComponent, CommonModule ],
    providers:    []
})
export class DashboardModule {
	
}