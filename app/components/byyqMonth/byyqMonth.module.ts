import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ByyqMonthComponent } from './byyqMonth.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ ByyqMonthComponent ],
    exports:      [ ByyqMonthComponent, CommonModule ],
    providers:    []
})
export class ByyqMonthModule {

}