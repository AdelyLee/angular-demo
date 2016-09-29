/**
 * Created by topcom on 2016/9/12.
 */
import { Component , OnInit} from '@angular/core';
import { JryqDaily } from '../yqyj/yqyj';
import { JryqDailyService } from './jryqDaily.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'jryq-daily',
    templateUrl:'app/components/jryqDaily/jryqDaily.html',
    providers:  [JryqDailyService],
    styleUrls: ['app/pages/jryq/jryq.css']

})
export class JryqDailyComponent implements OnInit{
    errorMessage: string;
    yqyj: JryqDaily;
    constructor(private service: JryqDailyService) {}

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