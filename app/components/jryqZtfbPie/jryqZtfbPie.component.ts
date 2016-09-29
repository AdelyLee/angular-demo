
import { Component, OnInit, ElementRef } from '@angular/core';
import { Option } from '../option/option'

import { JryqZtfbPieService } from './jryqZtfbPie.service'


declare var echarts:any;
declare var $:any;

@Component({
    selector: 'jryq-ztfb-pie',
    template: `<div class = "col-sm-6" id = "JryqZtfbPie" style="width:600px;height:300px"></div>`,
    providers: [JryqZtfbPieService]
})
export class JryqZtfbPieComponent implements OnInit{
    errorMessage: string;
    option: Option;

    constructor(private service: JryqZtfbPieService, private elementRef: ElementRef) {
    }
    ngOnInit() {
        this.getAllParam();
    }

    DrawChart() {
        if (this.option) {
            $(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
            var echart = echarts.init($('#' + this.option.containerId)[0]);
            echart.setOption(this.option);
        }

    }

    getAllParam() {
        this.service.getOption().subscribe(res => {
                this.option = res;
                this.DrawChart();
            },
            error =>  this.errorMessage = <any>error);
    }
}