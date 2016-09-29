
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ArticlesSortComponent } from './articlesSort.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ ArticlesSortComponent ],
    exports:      [ ArticlesSortComponent, CommonModule ],
    providers:    []
})
export class ArticlesSortModule {

}