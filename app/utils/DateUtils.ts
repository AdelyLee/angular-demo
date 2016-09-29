import { Injectable } from '@angular/core';

@Injectable()
export class DateUtils {
    
    static format(date, format) {
        var o = {
            "M+": date.getMonth() + 1, // month
            "d+": date.getDate(), // day
            "h+": date.getHours(), // hour
            "m+": date.getMinutes(), // minute
            "s+": date.getSeconds(), // second
            "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
            "S": date.getMilliseconds()
                // millisecond
        };
    
        if(/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 -
                RegExp.$1.length));
        };
    
        for(var k in o) {
            if(new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
                    o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
            }
        };
        return format;
    }
    
    static parseStrToDate(str) {
        if(typeof str == 'string'){
            var results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) *$/);
            if(results && results.length>3)
                return new Date(parseInt(results[1]),parseInt(results[2]) -1,parseInt(results[3]));
            results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2}) *$/);
            if(results && results.length>6)
                return new Date(parseInt(results[1]),parseInt(results[2]) -1,parseInt(results[3]),parseInt(results[4]),parseInt(results[5]),parseInt(results[6]));
            results = str.match(/^ *(\d{4})-(\d{1,2})-(\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})\.(\d{1,9}) *$/);
            if(results && results.length>7)
                return new Date(parseInt(results[1]),parseInt(results[2]) -1,parseInt(results[3]),parseInt(results[4]),parseInt(results[5]),parseInt(results[6]),parseInt(results[7]));
        }
        return null;
    }
    
    static parseStrToTime(str) {
        if(typeof str == 'string'){
            var date = this.parseStrToDate(str);
            return Math.round(date.getTime() / 1000);
        }
        
        return null;
    }
    
    static dateAdd(date, strInterval, Number) {
        var dtTmp = date;
        switch (strInterval) {
            case 's' :return new Date(Date.parse(dtTmp) + (1000 * Number));
            case 'n' :return new Date(Date.parse(dtTmp) + (60000 * Number));
            case 'h' :return new Date(Date.parse(dtTmp) + (3600000 * Number));
            case 'd' :return new Date(Date.parse(dtTmp) + (86400000 * Number));
            case 'w' :return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
            case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            case 'm' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            case 'M' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, 1, 0, 0, 0);
            case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        }
    }
}