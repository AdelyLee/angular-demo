import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import {NewsComponent} from './news.component';
import {TabNewModule } from '../tab-new/tab-new.module';

@NgModule({
  	imports:      [ CommonModule,TabNewModule ],
  	declarations: [ NewsComponent ],
  	exports:      [ NewsComponent,TabNewModule,CommonModule ],
    providers:    []
})
export class NewsModule {
	
}