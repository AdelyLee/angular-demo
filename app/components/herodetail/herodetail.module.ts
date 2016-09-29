import { NgModule}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  	imports:      [ CommonModule ],
  	declarations: [ HeroDetailComponent ],
  	exports:      [ HeroDetailComponent, CommonModule ],
    providers:    []
})
export class HeroDetailModule {
	
}