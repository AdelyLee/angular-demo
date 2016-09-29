import { NgModule, ModuleWithProviders, Optional, SkipSelf}      from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FunnelComponent } from '../../components/funnel/funnel.component';
import { FunnelOptionService }       from './funnel.service';
import { FunnelOptionConfig } from './funnel.service';


@NgModule({
  	imports:      [ CommonModule ],
  	declarations: [ FunnelComponent ],
  	exports:      [ FunnelComponent, CommonModule ],
    providers:    [ FunnelOptionService ]
})
export class FunnelModule {
	constructor (@Optional() @SkipSelf() parentModule: FunnelModule) {
	    if (parentModule) {
	      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
	    }
	}
	
	static forRoot(config: FunnelOptionConfig): ModuleWithProviders {
		//TODO: 可以在此处设置相关用户值,不同的用户请求不同的url
	    return {
	      	ngModule: FunnelModule,
	      	providers: [
	        	{provide: FunnelOptionConfig, useValue: config }
	      	]
	    };
	}
}