import { NgModule }      from '@angular/core';

import { QjyqComponent } from './qjyq.component';
import { qjyqRouting } from './qjyq.routing';
import { BreadLineModule } from '../../components/breadLine/bread-line.module';
import { QjyqSxszComponent } from '../../components/qjyq-sxsz/qjyq-sxsz.component';
import { QjyqXbComponent } from '../../components/qjyq-xb/qjyq-xb.component';

import {ArticlesSortModule} from '../../components/articlesSort/articlesSort.module';
import {DropdownJudgedModule} from '../../components/dropdownJudged/dropdownJudged.module';
import {DropdownWarningModule} from '../../components/dropdownWarning/dropdownWarning.module';
import {DropdownArticlesOutModule} from '../../components/dropdownArticlesOut/dropdownArticlesOut.module';
import {JryqArticlesListConentModule} from '../../components/jryqArticlesListConent/jryqArticlesListConent.module';
import { TabsModule } from 'ng2-bootstrap/components/tabs';
@NgModule({
	imports: [qjyqRouting,
	         BreadLineModule,
	         ArticlesSortModule,
	         DropdownJudgedModule,
	         DropdownWarningModule,
	         DropdownArticlesOutModule,
	         JryqArticlesListConentModule,
	         TabsModule
	         ],
	declarations: [ QjyqComponent,QjyqSxszComponent,QjyqXbComponent],
})
export class QjyqModule { }