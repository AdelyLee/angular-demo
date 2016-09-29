/**
 * Created by topcom on 2016/9/22.
 */
import { Component, OnInit, ElementRef } from '@angular/core';
import { Option } from '../option/option'

import { JryqZtqstLineService} from './jryqZtqstLine.service'


declare var echarts:any;
declare var $:any;

@Component({
    selector: 'jryq-ztqst-line',
    template: `<div class = "col-sm-12" id = "JryqZtqstLine" style="width:1200px;height:300px"></div>`,

    providers: [JryqZtqstLineService]
})
export class JryqZtqstLineComponent implements OnInit{
    errorMessage: string;
    option: Option;

    constructor(private service: JryqZtqstLineService, private elementRef: ElementRef) {
    }
    ngOnInit() {
        this.getAllParam();
    }

    drawChart() {
        if (this.option) {
            $(this.elementRef.nativeElement).find("div").attr("id", this.option.containerId);
            var echart = echarts.init($('#' + this.option.containerId)[0]);
            echart.setOption(this.option);
        }

    }

    getAllParam() {
        this.service.getOption().subscribe(res => {
                this.option = res;
                this.drawChart();
            },
            error =>  this.errorMessage = <any>error);
    }
}