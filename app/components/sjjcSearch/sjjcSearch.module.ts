
import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { SjjcSearchComponent } from './sjjcSearch.component';
import {ModalModule} from 'ng2-bootstrap/components/modal';
@NgModule({
    imports:      [ CommonModule ,ModalModule],
    declarations: [ SjjcSearchComponent ],
    exports:      [ SjjcSearchComponent, CommonModule ],
    providers:    []
})
export class SjjcSearchModule {

}