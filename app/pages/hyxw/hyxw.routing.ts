import { ModuleWithProviders }  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HyxwComponent } from './hyxw.component';

export const hyxwRoutes: Routes = [
    { path: 'hyxw', component: HyxwComponent }
];

export const hyxwRouting: ModuleWithProviders = RouterModule.forChild(hyxwRoutes);