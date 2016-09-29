/**
 * Created by topcom on 2016/9/12.
 */
import { Component , OnInit} from '@angular/core';
import { ByyqMonth } from '../yqyj/yqyj';
import { ByyqMonthService } from './byyqMonth.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'byyq-month',
    templateUrl:'app/components/byyqMonth/byyqMonth.html',
    providers:  [ByyqMonthService],
    styleUrls: ['app/pages/jryq/jryq.css']

})
export class ByyqMonthComponent implements OnInit{
    errorMessage: string;
    yqyj: ByyqMonth;
    constructor(private service: ByyqMonthService) {}

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