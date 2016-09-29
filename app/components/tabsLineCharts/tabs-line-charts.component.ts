import {Component, OnInit, ElementRef} from '@angular/core';
import {DateUtils} from '../../utils/DateUtils';
import {TabsChartsService} from './tabs-line-charts.service';
import {QueryUtil} from '../../utils/Query';

declare var echarts: any;
declare var $: any;

@Component({
    selector: 'tabs-line-chart',
    templateUrl: 'app/components/tabsLineCharts/tabs-line-charts-component.html',
    styleUrls: ['app/pages/index/index-component.css'],
    providers: [TabsChartsService, QueryUtil, DateUtils]
})
export class TabsLineChartsComponent implements OnInit {
    chartWidth = "800";
    param: {pubTimeStart: string, pubTimeEnd: string, dateGap: string};

    constructor(private tabsChartsService: TabsChartsService, private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.param = {
            pubTimeStart: "",
            pubTimeEnd: "",
            dateGap: ""
        };
        this.chartWidth = $(this.elementRef.nativeElement).width();
        var item = $("#item0")[0];
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
                this.param.dateGap = "1HOUR";
                break;
            case '昨天':
                var endDate = new Date();
                var startDate = DateUtils.dateAdd(endDate, 'd', -1);
                var paramDate = this.getParamDate(startDate, startDate);
                this.param.pubTimeStart = paramDate.pubTimeStart;
                this.param.pubTimeEnd = paramDate.pubTimeEnd;
                this.param.dateGap = "1HOUR";
                break;
            case '近7天':
                var endDate = new Date();
                var startDate = DateUtils.dateAdd(endDate, 'd', -7);
                var paramDate = this.getParamDate(startDate, endDate);
                this.param.pubTimeStart = paramDate.pubTimeStart;
                this.param.pubTimeEnd = paramDate.pubTimeEnd;
                this.param.dateGap = "1DAY";
                break;
            case '近30天':
                var endDate = new Date();
                var startDate = DateUtils.dateAdd(endDate, 'd', -300);
                var paramDate = this.getParamDate(startDate, endDate);
                this.param.pubTimeStart = paramDate.pubTimeStart;
                this.param.pubTimeEnd = paramDate.pubTimeEnd;
                this.param.dateGap = "1DAY";
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
            var renderData = {legendData: [], xAxisData: [], seriesData: []};
            renderData.legendData = ["新闻", "微博", "贴吧", "论坛"];
            renderData.xAxisData = data.date;
            $.each(renderData.legendData, function (i, item) {
                var seriesItem = {
                    name: "",
                    data: [],
                    "type": "line",
                    "stack": "总量",
                    "areaStyle": {
                        "normal": {}
                    }
                };
                seriesItem.name = item;
                seriesItem.data = data[item];

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
                "trigger": "axis"
            },
            "legend": {
                "data": data.legendData
            },
            "toolbox": {
                "feature": {
                    "saveAsImage": {}
                }
            },
            "grid": {
                "left": "3%",
                "right": "4%",
                "bottom": "3%",
                "containLabel": true
            },
            "xAxis": [
                {
                    "type": "category",
                    "boundaryGap": false,
                    "data": data.xAxisData
                }
            ],
            "yAxis": [
                {
                    "type": "value"
                }
            ],
            "series": data.seriesData
        };
        $(node).css("width", this.chartWidth);
        var myChart = echarts.init(node);
        myChart.setOption(option);
    }
}