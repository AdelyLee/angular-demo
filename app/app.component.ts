import {Component, ViewContainerRef} from '@angular/core';

import './rxjs-operators';

@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    templateUrl: 'app/app-component.html'
})
export class AppComponent{
    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef: ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
    //public constructor() {
    // map_height=document.body.clientHeight;
     //document.getElementById("wrapper").style.height=map_height+"px"; 
    //}


}
