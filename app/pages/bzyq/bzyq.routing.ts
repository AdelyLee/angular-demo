import { ModuleWithProviders }  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { BzyqComponent } from './bzyq.component';

export const bzyqRoutes: Routes = [
    { path: 'bzyq', component: BzyqComponent }
];

export const bzyqRouting: ModuleWithProviders = RouterModule.forChild(bzyqRoutes);