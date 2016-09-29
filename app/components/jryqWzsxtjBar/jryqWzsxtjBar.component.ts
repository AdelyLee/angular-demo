/**
 * Created by topcom on 2016/9/22.
 */
/**
 * Created by topcom on 2016/9/22.
 */
import { Component, OnInit, ElementRef } from '@angular/core';
import { Option } from '../option/option'

import { JryqWzsxtjBarService } from './jryqWzsxtjBar.service'


declare var echarts:any;
declare var $:any;

@Component({
    selector: 'jryq-wzsxtj-bar',
    template: `<div class = "col-sm-12" id = "JryqWzsxtjBar" style="width:600px;height:250px"></div>`,
    providers: [JryqWzsxtjBarService]
})
export class JryqWzsxtjBarComponent implements OnInit{
    errorMessage: string;
    option: Option;

    constructor(private service: JryqWzsxtjBarService, private elementRef: ElementRef) {
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