/**
 * Created by topcom on 2016/9/12.
 */
import {NgModule}      from '@angular/core';
import {CommonModule}        from '@angular/common';
import {ModalDemoComponent} from './modal.component';
import {ModalModule} from 'ng2-bootstrap/components/modal';

@NgModule({
    imports: [CommonModule, ModalModule],
    declarations: [ModalDemoComponent],
    exports: [ModalDemoComponent, CommonModule],
})
export class SjjcSearchModalModule {

}