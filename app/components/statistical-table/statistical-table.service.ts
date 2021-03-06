import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ConnectUrls} from '../../utils/ConnectUrls';

@Injectable()
export class StatisticalTableService {
    httpUrl = ConnectUrls.solrUrl + "/newQuery/statistics.json";
    constructor(private http: Http) {}

    getTableData() {
        return this.http.get(this.httpUrl)
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