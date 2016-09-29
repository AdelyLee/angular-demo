/**
 * Created by topcom on 2016/9/9.
 */
import { Component , OnInit} from '@angular/core';
import { Yqyj } from '../yqyj/yqyj';
import { YqyjArticlesService } from './yqyjArticles.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'yqyj-articles',
    templateUrl:'app/components/yqyjArticles/yqyjArticles.html',
    providers:  [YqyjArticlesService],
    styleUrls: ['app/pages/yqyj/yqyj.css']

})
export class YqyjArticlesComponent implements OnInit{
    errorMessage: string;
    yqyj: Yqyj;
    constructor(private service: YqyjArticlesService) {}

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
