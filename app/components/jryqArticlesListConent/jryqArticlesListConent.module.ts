/**
 * 今日舆情文章内容
 */

import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqArticlesListConentComponent } from './jryqArticlesListConent.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqArticlesListConentComponent ],
    exports:      [ JryqArticlesListConentComponent, CommonModule ],
    providers:    []
})
export class JryqArticlesListConentModule {

}