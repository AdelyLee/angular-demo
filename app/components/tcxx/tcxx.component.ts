import { Component,OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Tcxxlb } from '../hero/hero';
import { TcxxService } from './tcxx.service';
declare var $:any;
@Component({
  selector: 'tcxx-app',
  styleUrls: ['app/pages/tc/tc.component.css'],
  templateUrl: 'app/components/tcxx/tcxx.component.html',
   providers: [TcxxService]
})
export class TcxxComponent implements OnInit {
	errorMessage: string;
    hero: Tcxxlb;
    constructor(private TcxxService: TcxxService) {}
    
    ngOnInit(): void {
        this.getTcxxlb();
    }
    getTcxxlb() {
        this.TcxxService.getTcxxlb().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
}