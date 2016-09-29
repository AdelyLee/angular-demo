import { Component , OnInit} from '@angular/core';
import { YjszLinkmanTable } from '../yqyj/yqyj';
import { YjszLinkmanTableService } from './yjszLinkmanTable.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'yjsz-linkman-table',
    templateUrl:'app/components/yjszLinkmanTable/yjszLinkmanTable.html',
    providers:  [YjszLinkmanTableService],
    styleUrls: ['app/pages/yjsz/yjsz.css']

})
export class YjszLinkmanTableComponent implements OnInit{
    errorMessage: string;
    yqyj: YjszLinkmanTable;
    constructor(private service: YjszLinkmanTableService) {}
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