/**
 * 预警设置邮件预警表单
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { YjszEmailFormComponent } from './yjszEmailForm.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ YjszEmailFormComponent ],
    exports:      [ YjszEmailFormComponent, CommonModule ],
    providers:    []
})
export class YjszEmailFormModule {

}