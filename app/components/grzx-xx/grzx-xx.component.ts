import { Component,OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Grzxxxlb } from '../hero/hero';
import { GrzxxxService } from './grzx-xx.service';
declare var $:any;
@Component({
  selector: 'grzxxxlb-app',
  styleUrls: ['app/pages/grzx/grzx.component.css'],
  templateUrl: 'app/components/grzx-xx/grzx-xx.component.html',
   providers: [GrzxxxService]
})
export class GrzxxxlbComponent implements OnInit {
	errorMessage: string;
    hero: Grzxxxlb;
    constructor(private GrzxxxService: GrzxxxService) {}
    
    ngOnInit(): void {
        this.getGrzxxxlb();
    }
    getGrzxxxlb() {
        this.GrzxxxService.getGrzxxxlb().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
}