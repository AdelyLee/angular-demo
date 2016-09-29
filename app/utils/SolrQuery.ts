/**
 * Created by lyc on 2016/9/21.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ConnectUrls} from './ConnectUrls';

declare var $: any;
@Injectable()
export class SolrQuery {
    httpUrl = ConnectUrls.solrUrl + '/query/query.json';

    constructor(private http: Http) {
    }

    getDataAjax(param, successCallBack, failedCallBack) {
        $.ajax({
            type:'post',
            url: this.httpUrl,
            contentType : "application/json; charset=utf-8",
            data : JSON.stringify(param),
            dataType : "json",
            success:function(data){
                if(successCallBack){
                    successCallBack(data);
                }
            },
            error:function(res){
                if(failedCallBack){
                    failedCallBack(res);
                }
            }
        });
    }

    getData(param) {
        let body = JSON.stringify(param);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.httpUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);

    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}


export class MLT {
    enable = false;
    mltFl = [];
    mltMintf = 1;
    mltMindf = 1;
    mltCount = 5;
}

export class Facet {
    field = [];
    minCount = 0;
    facetLimit = -1;
    facetMethod = null;
}

export class FacetDate {
    field = null;
    dateBegin = null;
    dateEnd = null;
    dateGap = null;
}

export class Sort {
    item = null;
    order = 'desc';//desc|asc
}

export class SolrQueryParam {
    q = '*:*';
    fq = [];
    sort = [];
    facet = false;
    _facet = new Facet();
    facetDate = new FacetDate();
    start = 0;
    limit = 10;
    fl = [];
    //this.highlight = new Highlight();
    //this.mlt = new MLT();
}