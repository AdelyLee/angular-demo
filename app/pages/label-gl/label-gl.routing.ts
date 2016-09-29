import { ModuleWithProviders }  from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import { LabelComponent } from './label-gl.component';

export const labelRoutes: Routes = [
    { path: 'label', component: LabelComponent }
];

export const labelRouting: ModuleWithProviders = RouterModule.forChild(labelRoutes);