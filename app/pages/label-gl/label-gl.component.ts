import { Component}      from '@angular/core';
import { Labelgl } from '../../components/hero/hero';
import { LabelService } from './label-gl.service'
import '../../rxjs-operators';
declare var $:any;
@Component({
   selector: 'my-labelgl',
   templateUrl: 'app/pages/label-gl/label-gl.component.html',
   styleUrls: ['app/pages/zdylm/zdylm.component.css'],
   providers: [LabelService]
})
export class LabelComponent{ 
	errorMessage: string;
    hero: Labelgl;
    constructor(private LabelService: LabelService) {}
    
    ngOnInit(): void {
        this.getLabelgl();
    }
    getLabelgl() {
        this.LabelService.getLabelgl().subscribe(res => {
                this.hero = res;
            },
            error => this.errorMessage = < any > error);
    }
}