import { Component,OnInit,ElementRef,EventEmitter,Input,Output }      from '@angular/core';
import { Router }            from '@angular/router';
import { Zdylm } from '../../components/hero/hero';
import { ZdylmService } from './zdylm.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
   selector: 'my-zdylm',
   templateUrl: 'app/pages/zdylm/zdylm.component.html',
   styleUrls: ['app/pages/zdylm/zdylm.component.css'],
   providers: [ZdylmService]
})
export class ZdylmComponent implements OnInit { 
	errorMessage: string;
     //hero: Zdylm;
    @Input()
     hero: Zdylm;
    @Output() close = new EventEmitter();
    constructor(private router: Router,private ZdylmService: ZdylmService) {}
    
    ngOnInit(): void {
        this.getZdylm();
    }
    getZdylm() {
        this.ZdylmService.getZdylm().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
    //删除
    delete(hero: Zdylm){
    	this.ZdylmService.delete(hero.lmname).subscribe(res =>{
    		    this.hero=res;
                //hero.lmname = res;
            },
        error => this.errorMessage = < any > error);
    }
    //添加
     addZdylm(lmname:string){
       if (!lmname) { return; }
         this.ZdylmService.addZdylm(lmname).subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
      }
 goBack(): void {
   this.close.emit(null);
  //window.history.back();
}
}