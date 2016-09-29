import { ModuleWithProviders }  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AqscjdjComponent } from './aqscjdj.component';

export const aqscjdjRoutes: Routes = [
    { path: 'aqscjdj', component: AqscjdjComponent }
];

export const aqscjdjRouting: ModuleWithProviders = RouterModule.forChild(aqscjdjRoutes);