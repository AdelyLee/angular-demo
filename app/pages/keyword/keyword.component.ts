import { Component,OnInit,ElementRef}      from '@angular/core';
import { Keyword } from '../../components/hero/hero';
import { KeywordService } from './keyword.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
   selector: 'my-keyword',
   templateUrl: 'app/pages/keyword/keyword.component.html',
   styleUrls: ['app/pages/keyword/keyword.component.css'],
   providers: [KeywordService]
})
export class KeywordComponent implements OnInit { 
	optionxl = ['相关', '负面', '正面', '排除'];
    errorMessage: string;
    hero: Keyword;
    constructor(private KeywordService: KeywordService) {} 
    ngOnInit(): void {
        this.getKeyword();
    }
    getKeyword() {
        this.KeywordService.getKeyword().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
}