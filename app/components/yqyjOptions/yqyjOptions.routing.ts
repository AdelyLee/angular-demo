/**
 * Created by topcom on 2016/9/20.
 */
import { ModuleWithProviders }  from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { YqyjOptionsComponent } from './yqyjOptions.component';

export const yqyjOptionsRoutes: Routes = [
    { path: 'yqsz', component: YqyjOptionsComponent }
];

export const yqyjOptionsRouting: ModuleWithProviders = RouterModule.forChild(yqyjOptionsRoutes);