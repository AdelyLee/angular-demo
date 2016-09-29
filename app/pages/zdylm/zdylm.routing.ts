import { ModuleWithProviders }  from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import { ZdylmComponent } from './zdylm.component';

export const zdylmRoutes: Routes = [
    { path: 'zdylm', component: ZdylmComponent }
];

export const zdylmRouting: ModuleWithProviders = RouterModule.forChild(zdylmRoutes);