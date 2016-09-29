/**
 * Created by topcom on 2016/9/8.
 */
/**
 * 舆情预警模块
 * @author Lyc
 * @Time 2016年9月6日
 *
 */
import { ModuleWithProviders }  from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { YqyjComponent } from './yqyj.component';

export const yqyjRoutes: Routes = [
    { path: 'yqyj', component: YqyjComponent }
];

export const yqyjRouting: ModuleWithProviders = RouterModule.forChild(yqyjRoutes);