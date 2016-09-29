/**
 * 今日舆情站点分布柱状图
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqZdfbBarComponent } from './jryqZdfbBar.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqZdfbBarComponent ],
    exports:      [ JryqZdfbBarComponent, CommonModule ],
    providers:    []
})
export class JryqZdfbBarModule {

}