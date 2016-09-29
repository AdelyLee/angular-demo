import { Component, OnInit, ElementRef } from '@angular/core';
import { Option } from '../option/option'

import { LinemjtOptionService } from './line-mjt.service'


declare var echarts:any;
declare var $:any;

@Component({
    selector: 'linemjt-chart',
	template: `<div style="height:300px"></div>`,
    providers: [LinemjtOptionService]
})
export class LinemjtComponent implements OnInit{
	errorMessage: string;
  	option: Option;
  	
	constructor(private linemjtOptionService: LinemjtOptionService, private elementRef: ElementRef) {
	}
	ngOnInit() {
		this.getLinemjtOption();
	}
	
	drawLinemjtChart() {
		if (this.option) {
			$(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
			var echart = echarts.init($('#' + this.option.containerId)[0]);
    		echart.setOption(this.option);
		}
		
	}
	
	getLinemjtOption() {
		this.linemjtOptionService.getOption().subscribe(res => { 
			this.option = res;
			this.drawLinemjtChart();
		},
		error =>  this.errorMessage = <any>error);
	}
}