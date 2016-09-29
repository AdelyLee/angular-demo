import {NgModule}      from '@angular/core';
import {CommonModule}        from '@angular/common';
import {TabsLineChartsComponent} from './tabs-line-charts.component';
import { FromRadioModule } from '../from-radio/from-radio.module';

import {TabsModule} from 'ng2-bootstrap/components/tabs';

@NgModule({
    imports: [CommonModule, FromRadioModule, TabsModule],
    declarations: [TabsLineChartsComponent],
    exports: [TabsLineChartsComponent, CommonModule],
})
export class TabsLineChartsModule {

}