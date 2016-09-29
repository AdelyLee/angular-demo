
import { ModuleWithProviders }  from '@angular/core';
import { Routes,RouterModule} from '@angular/router';

import { SjjcComponent } from './sjjc.component';

export const sjjcRoutes: Routes = [
    { path: 'sjjc', component: SjjcComponent }
];

export const sjjcRouting: ModuleWithProviders = RouterModule.forChild(sjjcRoutes);