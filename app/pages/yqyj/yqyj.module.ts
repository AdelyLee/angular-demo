/**
 * Created by topcom on 2016/9/8.
 */
import { NgModule }      from '@angular/core';
import { DropdownModule } from 'ng2-bootstrap/components/dropdown';
import { YqyjComponent } from './yqyj.component';

import { yqyjRouting } from './yqyj.routing';
import { BreadLineModule } from '../../components/breadLine/bread-line.module';
import { YqyjOptionsModule } from '../../components/yqyjOptions/yqyjOptions.module';
import { DropdownArticlesOutModule } from '../../components/dropdownArticlesOut/dropdownArticlesOut.module';
import { ArticlesSortModule } from '../../components/articlesSort/articlesSort.module';
import { YqyjArticlesModule } from '../../components/yqyjArticles/yqyjArticles.module';

@NgModule({
    imports: [yqyjRouting,DropdownModule,BreadLineModule,YqyjOptionsModule,YqyjArticlesModule,ArticlesSortModule,DropdownArticlesOutModule],
    declarations: [ YqyjComponent ],
})
export class YqyjModule { }