
import { Component, OnInit, ElementRef } from '@angular/core';
import { Option } from '../option/option'

import { JryqZdfbBarService } from './jryqZdfbBar.service'


declare var echarts:any;
declare var $:any;

@Component({
    selector: 'jryq-zdfb-bar',
    template: `<div class = "col-sm-6" id = "JryqZdfbBar" style="width:600px;height:300px"></div>`,
    providers: [JryqZdfbBarService]
})
export class JryqZdfbBarComponent implements OnInit{
    errorMessage: string;
    option: Option;

    constructor(private service: JryqZdfbBarService, private elementRef: ElementRef) {
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