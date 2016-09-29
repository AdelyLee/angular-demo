/**
 * Created by topcom on 2016/9/12.
 */
import { Component , OnInit} from '@angular/core';
import { JryqZtqstTable } from '../yqyj/yqyj';
import { JryqZtqstTableService } from './jryqZtqstTable.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'jryq-ztqst-table',
    templateUrl:'app/components/jryqZtqstTable/jryqZtqstTable.html',
    providers:  [JryqZtqstTableService],
    styleUrls: ['app/pages/jryq/jryq.css']

})
export class JryqZtqstTableComponent implements OnInit{
    errorMessage: string;
    yqyj: JryqZtqstTable;
    constructor(private service: JryqZtqstTableService) {}

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