import { Component , OnInit} from '@angular/core';
import { YjszRulesTable } from '../yqyj/yqyj';
import { YjszRulesTableService } from './yjszRulesTable.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'yjsz-rules-table',
    templateUrl:'app/components/yjszRulesTable/yjszRulesTable.html',
    providers:  [YjszRulesTableService],
    styleUrls: ['app/pages/yjsz/yjsz.css']

})
export class YjszRulesTableComponent implements OnInit{
    errorMessage: string;
    yqyj: YjszRulesTable;
    constructor(private service: YjszRulesTableService) {}
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
