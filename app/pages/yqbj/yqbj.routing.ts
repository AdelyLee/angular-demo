/**
* 舆情警报路由模块
* @author Lyc
* @Time 2016年9月6日
*
*/
import { ModuleWithProviders }  from '@angular/core';
import {
    Routes,
    RouterModule 
} from '@angular/router';

import { YqbjComponent } from './yqbj.component';

export const yqbjRoutes: Routes = [
    { path: 'yqbj', component: YqbjComponent }
];

export const yqbjRouting: ModuleWithProviders = RouterModule.forChild(yqbjRoutes);