import { Component,OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Helplb } from '../hero/hero';
import { HelplbService } from './help-wz.service';
declare var $:any;
@Component({
  selector: 'helplb-app',
  styleUrls: ['app/pages/help/help.component.css'],
  templateUrl: 'app/components/help-wt/help-wz.component.html',
   providers: [HelplbService]
})
export class HelplbComponent implements OnInit {
	errorMessage: string;
    hero: Helplb;
    constructor(private HelplbService: HelplbService) {}
    
    ngOnInit(): void {
        this.getHelplb();
    }
    getHelplb() {
        this.HelplbService.getHelplb().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
}