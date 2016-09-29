
import { Component , OnInit} from '@angular/core';
import { JryqRwhydTable } from '../yqyj/yqyj';
import { JryqRwhydTableService } from './jryqRwhydTable.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'jryq-rwhyd-table',
    templateUrl:'app/components/jryqRwhydTable/jryqRwhydTable.html',
    providers:  [JryqRwhydTableService],
    styleUrls: ['app/pages/jryq/jryq.css']

})
export class JryqRwhydTableComponent implements OnInit{
    errorMessage: string;
    yqyj: JryqRwhydTable;
    constructor(private service: JryqRwhydTableService) {}

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