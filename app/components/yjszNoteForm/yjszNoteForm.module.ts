/**
 * 预警设置短信预警表单
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { YjszNoteFormComponent } from './yjszNoteForm.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ YjszNoteFormComponent ],
    exports:      [ YjszNoteFormComponent, CommonModule ],
    providers:    []
})
export class YjszNoteFormModule {

}