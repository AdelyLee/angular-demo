/**
 * 今日舆情人物活跃度柱状图
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqRwhydBarComponent } from './jryqRwhydBar.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqRwhydBarComponent ],
    exports:      [ JryqRwhydBarComponent, CommonModule ],
    providers:    []
})
export class JryqRwhydBarModule {

}