import {Injectable} from '@angular/core';

declare var $: any;

@Injectable()
export class QueryUtil {

    query(param, successCallBack, failedCallBack) {
        $.ajax({
            type: param.type,
            url: param.url,
            contentType: "application/json; charset=utf-8",
            data: param.data,
            dataType: "json",
            success: function (data) {
                if (successCallBack) {
                    successCallBack(data);
                }
            },
            error: function (res) {
                if (failedCallBack) {
                    failedCallBack(res);
                }
            }
        });
    }
}