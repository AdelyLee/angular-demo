import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import {TabNewComponent} from './tab-new.component';
import {TableNewModule } from '../table-new/table-new.module';
import { TabsModule } from 'ng2-bootstrap/components/tabs';

@NgModule({
  	imports:      [ CommonModule,TableNewModule,TabsModule],
  	declarations: [ TabNewComponent ],
  	exports:      [ TabNewComponent,TableNewModule,TabsModule,CommonModule ],
    providers:    []
})
export class TabNewModule {
	
}