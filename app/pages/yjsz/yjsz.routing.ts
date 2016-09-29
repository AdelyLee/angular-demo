/**
 * Created by topcom on 2016/9/8.
 */
/**
 * 预警设置模块
 * @author Lyc
 * @Time 2016年9月6日
 *
 */
import { ModuleWithProviders }  from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { YjszComponent } from './yjsz.component';

export const yjszRoutes: Routes = [
    { path: 'yjsz', component: YjszComponent }
];

export const yjszRouting: ModuleWithProviders = RouterModule.forChild(yjszRoutes);