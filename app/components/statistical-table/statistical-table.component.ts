import {Component, OnInit} from '@angular/core';
import {TableData} from '../hero/hero';
import {StatisticalTableService} from './statistical-table.service'

declare var $: any;

@Component({
    selector: 'index-app',
    styleUrls: ['app/pages/index/index-component.css'],
    templateUrl: 'app/components/statistical-table/statistical-table-component.html',
    providers: [StatisticalTableService]
})
export class StatisticalTableComponent implements OnInit {
    errorMessage: string;
    tableData: TableData;

    constructor(private statisticalTableService: StatisticalTableService) {
    }

    ngOnInit(): void {
        this.getTableData();
    }

    getTableData() {
        this.statisticalTableService.getTableData().subscribe(res => {
                this.tableData = res;
            },
            error => this.errorMessage = < any > error);
    }
}