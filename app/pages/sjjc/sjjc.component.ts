/**
 * Created by topcom on 2016/9/8.
 */
import { Component, OnInit }      from '@angular/core';

import '../../rxjs-operators';

declare var $: any;

@Component({
    templateUrl:'app/pages/sjjc/sjjc.html',
    styleUrls: ['app/pages/sjjc/sjjc.css']
})
export class SjjcComponent implements OnInit{
    ngOnInit() {
        $(function () {
            var height = $("html").height();
            $("#wrapper").css("height", height);

        });
    }
}
