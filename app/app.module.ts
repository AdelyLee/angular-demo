import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

import { IndexModule }      from './pages/index/index.module';
import { QjyqModule }      from './pages/qjyq/qjyq.module';
//import { YqbjModule } from './pages/yqbj/yqbj.module';
import { SjjcModule } from './pages/sjjc/sjjc.module';
import { KeywordModule } from './pages/keyword/keyword.module';
import { ZdylmModule } from './pages/zdylm/zdylm.module';
import { GrzxModule } from './pages/grzx/grzx.module';
import { TcModule } from './pages/tc/tc.module';
import { HelpModule } from './pages/help/help.module';
import { LabelModule } from './pages/label-gl/label-gl.module';
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';



import { YqyjModule } from './pages/yqyj/yqyj.module';
import { JryqModule } from './pages/jryq/jryq.module';
import { BzyqModule } from './pages/bzyq/bzyq.module';
import { ByyqModule } from './pages/byyq/byyq.module';
import { AqscjdjModule } from './pages/aqscjdj/aqscjdj.module';
import { HyxwModule } from './pages/hyxw/hyxw.module';

import { YjszModule } from './pages/yjsz/yjsz.module';

import { routing } from './app.routing';

@NgModule({
	imports:[ 
	BrowserModule, 
	FormsModule,
	HttpModule, 
	routing, 
	IndexModule, 
	QjyqModule, 
	//YqbjModule, 
	YqyjModule,
	SjjcModule,
	KeywordModule,
	ZdylmModule,
	GrzxModule,
	TcModule,
	HelpModule,
	LabelModule,
	DropdownModule,
	JryqModule,
	BzyqModule,
	ByyqModule,
	AqscjdjModule,
	HyxwModule,
	YjszModule
	],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }