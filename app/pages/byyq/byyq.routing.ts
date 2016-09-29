import { ModuleWithProviders }  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ByyqComponent } from './byyq.component';

export const byyqRoutes: Routes = [
    { path: 'byyq', component: ByyqComponent }
];

export const byyqRouting: ModuleWithProviders = RouterModule.forChild(byyqRoutes);