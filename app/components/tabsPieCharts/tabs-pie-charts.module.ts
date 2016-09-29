import {NgModule}      from '@angular/core';
import {CommonModule}        from '@angular/common';
import {TabsPieChartsComponent} from './tabs-pie-charts.component';
import { FromRadioModule } from '../from-radio/from-radio.module';

import {TabsModule} from 'ng2-bootstrap/components/tabs';

@NgModule({
    imports: [CommonModule, FromRadioModule, TabsModule],
    declarations: [TabsPieChartsComponent],
    exports: [TabsPieChartsComponent, CommonModule],
})
export class TabsPieChartsModule {

}