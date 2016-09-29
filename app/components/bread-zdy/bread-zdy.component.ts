import {Component} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'bread-zdy',
    templateUrl: 'app/components/bread-zdy/bread-zdy.component.html',
    styleUrls:  ['app/components/breadLine/bread-line.component.css']
})
export class BreadZdyComponent {
    pageName:string;
    
    constructor(private router: Router) {
        this.getPagename();
    }
    
    getPagename() {
        var url = this.router.url.split('/')[1];
        switch(url) {
            case 'label':
                this.pageName = "标签管理";
                break;
            default:
                this.pageName = "主页";
                break;
        }
    }
    goHome() {
        this.router.navigateByUrl("/index");
    }
}