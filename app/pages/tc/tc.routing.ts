import { ModuleWithProviders }  from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import { TcComponent } from './tc.component';

export const tcRoutes: Routes = [
    { path: 'tc', component: TcComponent }
];

export const tcRouting: ModuleWithProviders = RouterModule.forChild(tcRoutes);