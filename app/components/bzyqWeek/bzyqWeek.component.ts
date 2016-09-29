/**
 * Created by topcom on 2016/9/12.
 */
import { Component , OnInit} from '@angular/core';
import { BzyqWeek } from '../yqyj/yqyj';
import { BzyqWeekService } from './bzyqWeek.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'bzyq-week',
    templateUrl:'app/components/bzyqWeek/bzyqWeek.html',
    providers:  [BzyqWeekService],
    styleUrls: ['app/pages/jryq/jryq.css']

})
export class BzyqWeekComponent implements OnInit{
    errorMessage: string;
    yqyj: BzyqWeek;
    constructor(private service: BzyqWeekService) {}

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