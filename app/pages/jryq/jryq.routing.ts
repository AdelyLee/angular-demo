
/**
 * 今日舆情模块
 */
import { ModuleWithProviders }  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { JryqComponent } from './jryq.component';

export const jryqRoutes: Routes = [
    { path: 'jryq', component: JryqComponent }
];

export const jryqRouting: ModuleWithProviders = RouterModule.forChild(jryqRoutes);