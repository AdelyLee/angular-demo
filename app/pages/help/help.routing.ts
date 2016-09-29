import { ModuleWithProviders }  from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';

export const helpRoutes: Routes = [
    { path: 'help', component: HelpComponent }
];

export const helpRouting: ModuleWithProviders = RouterModule.forChild(helpRoutes);