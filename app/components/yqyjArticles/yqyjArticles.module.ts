/**
 * 舆情预警文章内容
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { YqyjArticlesComponent } from './yqyjArticles.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ YqyjArticlesComponent ],
    exports:      [ YqyjArticlesComponent, CommonModule ]

})
export class YqyjArticlesModule {

}