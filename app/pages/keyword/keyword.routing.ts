import { ModuleWithProviders }  from '@angular/core';
import {Routes,RouterModule } from '@angular/router';

import { KeywordComponent } from './keyword.component';

export const keywordRoutes: Routes = [
    { path: 'keyword', component: KeywordComponent }
];

export const keywordRouting: ModuleWithProviders = RouterModule.forChild(keywordRoutes);