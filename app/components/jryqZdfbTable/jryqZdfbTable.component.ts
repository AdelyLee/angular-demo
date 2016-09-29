/**
 * Created by topcom on 2016/9/12.
 */
import { Component , OnInit} from '@angular/core';
import { JryqZdfbTable } from '../yqyj/yqyj';
import { JryqZdfbTableService } from './jryqZdfbTable.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'jryq-zdfb-table',
    templateUrl:'app/components/jryqZdfbTable/jryqZdfbTable.html',
    providers:  [JryqZdfbTableService],
    styleUrls: ['app/pages/jryq/jryq.css']

})
export class JryqZdfbTableComponent implements OnInit {
    errorMessage: string;
    yqyj: JryqZdfbTable;
    constructor(private service: JryqZdfbTableService) {}

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
