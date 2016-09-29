import { Component , OnInit} from '@angular/core';
import { SjjcTable } from '../yqyj/yqyj';
import { SjjcTableService } from './sjjcTable.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'sjjc-table',
    templateUrl:'app/components/sjjcTable/sjjcTable.html',
    providers:  [SjjcTableService],
    styleUrls: ['app/pages/sjjc/sjjc.css']
})
export class SjjcTableComponent  implements OnInit{
    errorMessage: string;
    yqyj: SjjcTable;
    constructor(private service: SjjcTableService) {}
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
