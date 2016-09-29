import { Component, ViewChild } from '@angular/core';


import { ModalDirective } from 'ng2-bootstrap/components/modal';
@Component({
    selector: 'modal-demo',
    templateUrl:'app/components/modal/modal-demo.html',
    styleUrls: ['app/pages/sjjc/sjjc.css']
})
export class ModalDemoComponent {
    @ViewChild('childModal') public childModal:ModalDirective;
    public showChildModal():void {
        this.childModal.show();
    }
    public hideChildModal():void {
        this.childModal.hide();
    }
}

