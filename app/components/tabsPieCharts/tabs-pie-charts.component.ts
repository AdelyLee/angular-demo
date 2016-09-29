import {Component, OnInit, ElementRef} from '@angular/core';
import {DateUtils} from '../../utils/DateUtils';
import {TabsChartsService} from './tabs-pie-charts.service';
import {QueryUtil} from '../../utils/Query';

declare var echarts: any;
declare var $: any;

@Component({
    selector: 'tabs-pie-chart',
    templateUrl: 'app/components/tabsPieCharts/tabs-pie-charts-component.html',
    styleUrls: ['app/pages/index/index-component.css'],
    providers: [TabsChartsService, QueryUtil, DateUtils]
})
export class TabsPieChartsComponent implements OnInit {
    chartWidth = "800";
    param: {pubTimeStart: string, pubTimeEnd: string};

    constructor(private tabsChartsService: TabsChartsService, private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.param = {
            pubTimeStart: "",
            pubTimeEnd: ""
        };
        this.chartWidth = $(this.elementRef.nativeElement).width();
        var item = $("#pie-chart-item0")[0];
        this.selectTab(item);
    }

    selectTab(item) {
        var heading = $(item).attr("heading");
        switch (heading) {
            case '今天':
                var endDate = new Date();
                var paramDate = this.getParamDate(endDate, endDate);
                this.param.pubTimeStart = paramDate.pubTimeStart;
                this.param.pubTimeEnd = paramDate.pubTimeEnd;
                break;
            case '昨天':
                var endDate = new Date();
                var startDate = DateUtils.dateAdd(endDate, 'd', -1);
                var paramDate = this.getParamDate(startDate, startDate);
                this.param.pubTimeStart = paramDate.pubTimeStart;
                this.param.pubTimeEnd = paramDate.pubTimeEnd;
                break;
            case '近7天':
                var endDate = new Date();
                var startDate = DateUtils.dateAdd(endDate, 'd', -7);
                var paramDate = this.getParamDate(startDate, endDate);
                this.param.pubTimeStart = paramDate.pubTimeStart;
                this.param.pubTimeEnd = paramDate.pubTimeEnd;
                break;
            case '近30天':
                var endDate = new Date();
                var startDate = DateUtils.dateAdd(endDate, 'd', -300);
                var paramDate = this.getParamDate(startDate, endDate);
                this.param.pubTimeStart = paramDate.pubTimeStart;
                this.param.pubTimeEnd = paramDate.pubTimeEnd;
                break;
            default:
                break;
        }

        // 根据时间获取数据
        this.getData(this.param, item);
    }

    getData(param, item) {
        var self = this;
        var successCallBack = function (data) {
            var seriesDataTmp = [];
            $.each(data, function(i, node){
                var item = {name: "", value: 0};
                if (node.key == "News"){
                    item.name = "新闻";
                    item.value = node.value;
                    seriesDataTmp.push(item);
                } else if (node.key == "Weibo"){
                    item.name = "微博";
                    item.value = node.value;
                    seriesDataTmp.push(item);
                } else if (node.key == "Bar"){
                    item.name = "贴吧";
                    item.value = node.value;
                    seriesDataTmp.push(item);
                } else if (node.key == "Bbs"){
                    item.name = "论坛";
                    item.value = node.value;
                    seriesDataTmp.push(item);
                }
            });
            var renderData = {legendData: [], seriesData: []};
            $.each(seriesDataTmp, function(i, item){
                renderData.legendData.push(item.name);
            });
            $.each(renderData.legendData, function (i, item) {
                var seriesItem = {
                    name: "",
                    data: [],
                    "type": "pie",
                };
                seriesItem.name = item;
                seriesItem.data = seriesDataTmp;

                renderData.seriesData.push(seriesItem);
            });
            self.drawChart(item, renderData);
        };
        var failedCallBack = function (e) {
            console.log(e);
        };
        this.tabsChartsService.getData(param, successCallBack, failedCallBack);
    }

    private getParamDate(startDateTemp, endDateTemp) {
        var paramDate = {pubTimeStart: "", pubTimeEnd: ""};
        var startDateStr = startDateTemp.getFullYear() + "-" + (startDateTemp.getMonth() + 1) + "-" + startDateTemp.getDate();
        startDateStr = startDateStr + "T00:00:00Z";
        var endDateStr = endDateTemp.getFullYear() + "-" + (endDateTemp.getMonth() + 1) + "-" + endDateTemp.getDate();
        endDateStr = endDateStr + "T23:59:59Z";
        paramDate.pubTimeStart = startDateStr;
        paramDate.pubTimeEnd = endDateStr;

        return paramDate;
    }

    drawChart(node, data) {
        var option = {
            "title": {},
            "tooltip": {
                "trigger": "item",
                "formatter": "{a} <br/>{b}: {c} ({d}%)"
            },
            "legend": {
                "orient": "vertical",
                "x": "left",
                "data": data.legendData
            },
            "toolbox": {
                "feature": {
                    "saveAsImage": {}
                }
            },
            "series": data.seriesData
        };

        $(node).css("width", this.chartWidth);
        var echart = echarts.init(node);
        echart.setOption(option);
    }
}