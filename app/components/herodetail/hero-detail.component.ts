import {Component,OnInit,ElementRef} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Zdlb } from '../hero/hero';
import { HeroDetailService } from './hero-detail.service';
declare var $:any;

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/components/herodetail/hero-detail.component.html',
  styleUrls: ['app/pages/index/index-component.css'],
  providers: [HeroDetailService]
})
export class HeroDetailComponent implements OnInit{
	errorMessage: string;
    hero: Zdlb;
    constructor(private HeroDetailService: HeroDetailService) {}
    
    ngOnInit(): void {
        this.getZdlb();
    }
    getZdlb() {
        this.HeroDetailService.getZdlb().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }

}