/**
 * Created by topcom on 2016/9/12.
 */
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { JryqRwhydTopComponent } from './jryqRwhydTop.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ JryqRwhydTopComponent ],
    exports:      [ JryqRwhydTopComponent, CommonModule ],
    providers:    []
})
export class JryqRwhydTopModule {

}