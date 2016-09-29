import { Component, OnInit, ElementRef } from '@angular/core';
import { Option } from '../option/option'

import { PiehxtOptionService } from './piehxt.service'


declare var echarts:any;
declare var $:any;

@Component({
    selector: 'piehxt-chart',
	template: `<div style="height:270px"></div>`,
    providers: [PiehxtOptionService]
})
export class PiehxtComponent implements OnInit{
	errorMessage: string;
  	option: Option;
  	
	constructor(private piehxtOptionService: PiehxtOptionService, private elementRef: ElementRef) {
	}
	ngOnInit() {
		this.getPiehxtOption();
	}
	
	drawPiehxtChart() {
		if (this.option) {
			// this.elementRef.nativeElement 获取当前选择器元素
			$(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
			var echart = echarts.init($('#' + this.option.containerId)[0]);
    		echart.setOption(this.option);
		}
		
	}
	
	getPiehxtOption() {
		this.piehxtOptionService.getOption().subscribe(res => { 
			this.option = res;
			this.drawPiehxtChart();
		},
		error =>  this.errorMessage = <any>error);
	}
}