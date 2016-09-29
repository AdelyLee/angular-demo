/**
 * Created by topcom on 2016/9/12.
 */
import { Component , OnInit} from '@angular/core';
import { JryqWzsxtjTable } from '../yqyj/yqyj';
import { JryqWzsxtjTableService } from './jryqWzsxtjTable.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'jryq-wzsxtj-table',
    templateUrl:'app/components/jryqWzsxtjTable/jryqWzsxtjTable.html',
    providers:  [JryqWzsxtjTableService],
    styleUrls: ['app/pages/jryq/jryq.css']

})
export class JryqWzsxtjTableComponent implements OnInit {
    errorMessage: string;
    yqyj: JryqWzsxtjTable;
    constructor(private service: JryqWzsxtjTableService) {}

    ngOnInit(): void{
        this.getAllParam();
    }
    getAllParam() {
        this.service.getOption().subscribe(res => {
                this.yqyj = res;
            },
            error => this.errorMessage = < any > error);
    }
}