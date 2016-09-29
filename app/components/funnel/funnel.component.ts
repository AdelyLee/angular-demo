import { Component, OnInit, ElementRef} from '@angular/core';
import { Option } from '../option/option'

import { FunnelOptionService } from './funnel.service'

declare var echarts:any;
declare var $:any;

@Component({
    selector: 'funnel-chart',
	template: `<div style="height:280px"></div>`,
    providers: [FunnelOptionService]
})
export class FunnelComponent implements OnInit{
	errorMessage: string;
	url: string;
  	option: Option;
  	
	constructor(private funnelOptionService: FunnelOptionService, private elementRef: ElementRef) {
	}
	
	ngOnInit() {
		this.getFunnelOption();
	}
	
	drawFunnelChart() {
		if (this.option) {
			$(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
			var echart = echarts.init($('#' + this.option.containerId)[0]);
    		echart.setOption(this.option);
		}
	}
	
	getFunnelOption() {
		this.funnelOptionService.getOption().subscribe(res => { 
			this.option = res;
			this.drawFunnelChart();
		},
		error =>  this.errorMessage = <any>error);
	}
}