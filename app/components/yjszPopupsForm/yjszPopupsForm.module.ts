/**
 * 预警设置弹窗预警表单
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { YjszPopupsFormComponent } from './yjszPopupsForm.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ YjszPopupsFormComponent ],
    exports:      [ YjszPopupsFormComponent, CommonModule ],
    providers:    []
})
export class YjszPopupsFormModule {

}