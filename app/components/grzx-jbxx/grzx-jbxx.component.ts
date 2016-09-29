import { Component,OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Grzxjbxxlb } from '../hero/hero';
import { GrzxjbxxService } from './grzx-jbxx.service';
declare var $:any;
@Component({
  selector: 'grzxjbxxlb-app',
  styleUrls: ['app/pages/grzx/grzx.component.css'],
  templateUrl: 'app/components/grzx-jbxx/grzx-jbxx.component.html',
   providers: [GrzxjbxxService]
})
export class GrzxjbxxlbComponent implements OnInit {
	errorMessage: string;
    hero: Grzxjbxxlb;
    constructor(private GrzxjbxxService: GrzxjbxxService) {}
    
    ngOnInit(): void {
        this.getGrzxjbxxlb();
    }
    getGrzxjbxxlb() {
        this.GrzxjbxxService.getGrzxjbxxlb().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
}