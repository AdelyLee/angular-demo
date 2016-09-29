import { Component,OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Grzxrzxxlb } from '../hero/hero';
import { GrzxrzxxService } from './grzx-rzxx.service';
declare var $:any;
@Component({
  selector: 'grzxrzxxlb-app',
  styleUrls: ['app/pages/grzx/grzx.component.css'],
  templateUrl: 'app/components/grzx-rzxx/grzx-rzxx.component.html',
   providers: [GrzxrzxxService]
})
export class GrzxrzxxlbComponent implements OnInit {
	errorMessage: string;
    hero: Grzxrzxxlb ;
    constructor(private GrzxrzxxService: GrzxrzxxService) {}
    
    ngOnInit(): void {
        this.getGrzxrzxxlb();
    }
    getGrzxrzxxlb() {
        this.GrzxrzxxService.getGrzxrzxxlb().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
}