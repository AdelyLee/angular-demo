/**
 * Created by topcom on 2016/9/12.
 */
import { Component , OnInit} from '@angular/core';
import { JryqZtfbTable } from '../yqyj/yqyj';
import { JryqZtfbTableService } from './jryqZtfbTable.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'jryq-ztfb-table',
    templateUrl:'app/components/jryqZtfbTable/jryqZtfbTable.html',
    providers:  [JryqZtfbTableService],
    styleUrls: ['app/pages/jryq/jryq.css']

})
export class JryqZtfbTableComponent implements OnInit{
    errorMessage: string;
    yqyj: JryqZtfbTable;
    constructor(private service: JryqZtfbTableService) {}

    ngOnInit(){
        this.getAllParam();
    }
    getAllParam() {
        this.service.getOption().subscribe(res => {
                this.yqyj = res;
            },
            error => this.errorMessage = < any > error);
    }
}