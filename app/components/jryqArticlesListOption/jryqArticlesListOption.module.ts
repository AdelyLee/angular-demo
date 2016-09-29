/**
 * 今日舆情筛选设置
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqArticlesListOptionComponent } from './jryqArticlesListOption.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqArticlesListOptionComponent ],
    exports:      [ JryqArticlesListOptionComponent, CommonModule ],
    providers:    []
})
export class JryqArticlesListOptionModule {

}