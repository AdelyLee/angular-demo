import { Component,OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Tclxlb } from '../hero/hero';
import { TclxService } from './tclx.service';
declare var $:any;
@Component({
  selector: 'tclx-app',
  styleUrls: ['app/pages/tc/tc.component.css'],
  templateUrl: 'app/components/tctype/tclx.component.html',
   providers: [TclxService]
})
export class TclxComponent implements OnInit {
	errorMessage: string;
    hero: Tclxlb;
    constructor(private TclxService: TclxService) {}
    
    ngOnInit(): void {
        this.getTclxlb();
    }
    getTclxlb() {
        this.TclxService.getTclxlb().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
}