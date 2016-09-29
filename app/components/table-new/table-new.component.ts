import { Component,OnInit} from '@angular/core';
import { Wxlb } from '../hero/hero';
import { TableNewService } from './table-new.service';
declare var $:any;
@Component({
  selector: 'table-new',
  templateUrl: 'app/components/table-new/table-new.component.html',
  styleUrls: ['app/pages/index/index-component.css'],
  providers: [TableNewService]
})
export class TableNewComponent implements OnInit{
	errorMessage: string;
    hero: Wxlb;
    constructor(private TableNewService: TableNewService) {}
    
    ngOnInit(): void {
        this.getWxlb();
    }
    getWxlb() {
        this.TableNewService.getWxlb().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
}