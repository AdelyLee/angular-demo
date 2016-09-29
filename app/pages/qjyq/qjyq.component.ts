import {Component, OnInit}      from '@angular/core';

import '../../rxjs-operators';

declare var $: any;

@Component({
	selector: 'my-qjyq',
    templateUrl: 'app/pages/qjyq/qjyq.component.html',
    styleUrls: ['app/pages/qjyq/qjyq-component.css']
})
export class QjyqComponent implements OnInit {
    ngOnInit() {
        $(function () {
            var height = $("html").height();
            $("#wrapper").css("height", height);

        });
    }
}