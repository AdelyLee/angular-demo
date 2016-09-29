/**
 * Created by topcom on 2016/9/12.
 */
import { Component , OnInit} from '@angular/core';
import { JryqArticlesContent } from '../yqyj/yqyj';
import { JryqArticlesListConentService } from './jryqArticlesListConent.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
    selector: 'jryq-articles-list-conent',
    templateUrl:'app/components/jryqArticlesListConent/jryqArticlesListConent.html',
    providers:  [JryqArticlesListConentService],
    styleUrls: ['app/pages/yqyj/yqyj.css']

})
export class JryqArticlesListConentComponent implements OnInit{
    errorMessage: string;
    yqyj: JryqArticlesContent;
    constructor(private jryqArticlesListConentService: JryqArticlesListConentService) {}

    ngOnInit(): void{
        this.getAllParam();
    }
    getAllParam() {
        this.jryqArticlesListConentService.getOption().subscribe(res => {
                this.yqyj = res;
            },
            error => this.errorMessage = < any > error);
    }}
