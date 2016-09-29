import { ModuleWithProviders }  from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import { GrzxComponent } from './grzx.component';

export const grzxRoutes: Routes = [
    { path: 'grzx', component: GrzxComponent }
];

export const grzxRouting: ModuleWithProviders = RouterModule.forChild(grzxRoutes);